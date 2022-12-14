import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  heroes:Hero[]=[];
  constructor(private heroService:HeroService) { }

  ngOnInit(): void {
    this.getHeroes();

  }
  selectedHero?:Hero;
  onSelect(hero:Hero):void{
    this.selectedHero=hero
  }
  getHeroes():void{
    //this.heroes=this.heroService.getHeroes();
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}
