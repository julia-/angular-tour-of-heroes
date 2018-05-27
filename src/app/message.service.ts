import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  // add message to the cache
  add(message: string) {
    this.messages.push(message);
  }

  // clears the cache
  clear() {
    this.messages = [];
  }

  constructor() {}
}
