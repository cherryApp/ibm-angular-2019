import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/model/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  list: Hero[];
  cols: {key: string, title: string}[] = [
    {key: 'name', title: 'Name'},
    {key: 'age', title: 'Age'},
    {key: 'address', title: 'Address'},
    {key: 'superPower', title: 'Super Power'},
  ];

  filterKey: string = '';

  selectedHero: Hero;

  constructor() {
    this.list = this.generateHeroes();
  }

  generateHeroes(heroNum: number = 100): Hero[] {
    const names = ['Reflux', 'Magneto', 'Bombasto', 'Electro', 'Risotto', 'Margherita'];
    const sps = ['spit', 'strong', 'spicy', 'badSmell'];
    const heroes: Hero[] = [];
    for (let i = 0; i < heroNum; i++) {
      const randInt: number = Math.round(Math.random() * 250);
      const hero: Hero = new Hero({
        name: names[Math.floor(Math.random() * names.length)],
        superPower: sps[Math.floor(Math.random() * sps.length)],
        age: randInt,
      });
      heroes.push(hero);
    }
    return heroes;
  }

  ngOnInit() {
  }

  selectHero(hero: Hero): void {
    this.selectedHero = hero;
  }

  removeHero(hero: Hero): void {
    const index = this.list.indexOf(hero);
    this.list.splice(index, 1);
    this.selectedHero = null;
  }

}
