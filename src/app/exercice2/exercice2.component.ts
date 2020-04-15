import { Component, OnInit, ViewChild, ElementRef, DoCheck } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit{
  @ViewChild('i', {static: true}) private el: ElementRef;
  public valeur: string;

  constructor() { }

  ngOnInit() {
  }

  setValue() {
    this.valeur = this.el.nativeElement.value;
  }

}
