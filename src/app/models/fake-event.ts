export class FakeEvent {
  id: number;
  date: string | Date;
  eventType: string;
  country: string;
  userAgent: string;
  purchaseData: any;
  constructor(id: number, date: string | Date, eventType: string, country: string, userAgent: string) {
    this.id = id;
    this.date = date;
    this.eventType = eventType;
    this.country = country;
    this.userAgent = userAgent;
    this.purchaseData = eventType === 'purchase' ? Math.floor(Math.random() * 100) : 0;
  }
}

