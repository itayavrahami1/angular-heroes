import { Injectable } from '@angular/core';
import { Hero } from '../../cmps/heroes/hero';
import { HEROES } from '../../cmps/heroes/mock-heroes';
import { MessageService } from '../../services/message/message.service';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: MessageService) { }
  // SYNCHRONOUS GET
  // getHeroes(): Hero[]{
  //   return HEROES
  // }

  // ASYNCHRONOUS GET
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('selected HEROES');
    return of(HEROES);
  }

  getHero(id: number): Observable <Hero> {
    const hero = of(HEROES.find(hero => hero.id === id));
    // this.messageService.add(`${hero.name} selected`);
    return hero
  }
}
