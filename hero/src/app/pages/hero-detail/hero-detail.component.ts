import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from 'src/app/model/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;
  @Output() deleteHero: EventEmitter<Hero> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onDelete(hero: Hero): void {
    this.deleteHero.emit(hero);
  }

}
