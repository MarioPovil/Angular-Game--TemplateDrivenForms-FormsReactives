import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cities',
  template: `
    <li style="list-style: none;" (click)="onCityClicked(city)" [ngClass]="{'alert alert-primary': city===selection}">
    {{city}} </li>`,
  styleUrls: ['./cities.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CitiesComponent  {
@Input() city!:string;
@Input() selection!:string;
@Output() cityClickedEvent = new EventEmitter<string>();

onCityClicked(city: string): void{
 this.cityClickedEvent.emit(city);

  /*console.log('City', city);
  this.selection=city;*/
}
  counterRender(): boolean{
  console.log("Render de cities");
    return true;
  }
}
