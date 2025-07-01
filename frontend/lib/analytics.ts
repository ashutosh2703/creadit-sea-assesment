interface EventData {
  userId: string;
  sessionId: string;
  page: string;
  eventType: 'page_visit' | 'click' | 'form_submission';
  eventData: any;
  timestamp: Date;
}

class Analytics {
  private db: IDBDatabase | null = null;
  private isOnline = true;
  private syncQueue: EventData[] = [];

  constructor() {
    if (typeof window !== 'undefined') {
      this.isOnline = navigator.onLine;
      this.initDB();
      this.setupOnlineOfflineListeners();
    }
  }

  private async initDB() {
    if (typeof window === 'undefined') return;
    return new Promise<void>((resolve, reject) => {
      const request = indexedDB.open('UserTrackDB', 1);
      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        this.db = request.result;
        resolve();
      };
      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        if (!db.objectStoreNames.contains('events')) {
          db.createObjectStore('events', { keyPath: 'id', autoIncrement: true });
        }
      };
    });
  }

  private setupOnlineOfflineListeners() {
    if (typeof window === 'undefined') return;
    window.addEventListener('online', () => {
      this.isOnline = true;
      this.syncEvents();
    });
    window.addEventListener('offline', () => {
      this.isOnline = false;
    });
  }

  private async storeEventLocally(event: EventData): Promise<void> {
    if (!this.db) await this.initDB();
    if (!this.db) return;
    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['events'], 'readwrite');
      const store = transaction.objectStore('events');
      const request = store.add(event);
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }

  private async sendEventToServer(event: EventData): Promise<boolean> {
    try {
      const response = await fetch('http://localhost:4000/api/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(event)
      });
      return response.ok;
    } catch (error) {
      console.error('Failed to send event to server:', error);
      return false;
    }
  }

  private async syncEvents() {
    if (!this.db) return;
    const transaction = this.db.transaction(['events'], 'readwrite');
    const store = transaction.objectStore('events');
    const request = store.getAll();
    request.onsuccess = async () => {
      const events = request.result;
      for (const event of events) {
        const success = await this.sendEventToServer(event);
        if (success) {
          store.delete(event.id);
        }
      }
    };
  }

  async trackEvent(eventType: 'page_visit' | 'click' | 'form_submission', page: string, eventData: any) {
    if (typeof window === 'undefined') return;
    const event: EventData = {
      userId: 'demo-user',
      sessionId: 'demo-session',
      page,
      eventType,
      eventData,
      timestamp: new Date()
    };
    if (this.isOnline) {
      const success = await this.sendEventToServer(event);
      if (!success) {
        await this.storeEventLocally(event);
      }
    } else {
      await this.storeEventLocally(event);
    }
  }
}

let analytics: Analytics | null = null;
if (typeof window !== 'undefined') {
  analytics = new Analytics();
}

export const trackEvent = (
  eventType: 'page_visit' | 'click' | 'form_submission',
  page: string,
  eventData: any
) => {
  if (analytics) {
    analytics.trackEvent(eventType, page, eventData);
  }
}; 