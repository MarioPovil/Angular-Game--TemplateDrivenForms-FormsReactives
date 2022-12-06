import { Component } from '@angular/core';
import { environment } from '../enviroments/palabras';

@Component({
  selector: 'app-start-button',
  templateUrl: './start-button.component.html',
  styleUrls: ['./start-button.component.scss']
})
export class StartButtonComponent {
  numero!:number;
  palabra!:string;
  pista!:string;
  name!:string;
constructor(){ }

  start():void{
    this.numero= Math.round(35*Math.random());

     this.palabra = environment[this.numero].palabra.toLowerCase();
     this.pista = environment[this.numero].pista;
  }
  word(name:string):void{
    this.name=name;
  }
}
