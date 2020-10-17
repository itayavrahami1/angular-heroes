import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroes/hero';
import { HeroService } from '../../services/hero/hero.service';
import { MessageService } from '../../services/message/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  
  heroes: Hero[];
  // selectedHero: Hero;
  constructor(private heroService: HeroService, private messageService: MessageService) { }
  
  ngOnInit(): void {
    this.getHeroes()
  }
  // SYNCH
  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }

  // ASYNCH
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  // onHero(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add(`${hero.name}`);
  // }

}
