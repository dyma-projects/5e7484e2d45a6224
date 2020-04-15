import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  @Input() public compteur: number;
  @Output() public resultat: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  incrementer(): void {
    this.compteur++;
    this.resultat.emit(this.compteur);
  }

  decrementer(): void {
    this.compteur--;
    this.resultat.emit(this.compteur);
  }

}
