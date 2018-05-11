import { Injectable } from '@angular/core'

import { Observable, of } from 'rxjs'

import { Hero } from './hero'
import { HEROES } from './mock-heroes'
import { MessageService } from './message.service'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  // constructor receives a param that declares a private messageService property
  // singleton MessageService is injected into that property when the HeroService is created
  // typical "service-in-service" scenario - inject the MessageService into the HeroService which is injected into the HeroesComponent.
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES)
  }
}
