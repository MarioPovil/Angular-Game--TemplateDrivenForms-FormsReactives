import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '28dias';
  name!: string;
  cities = ['Coahuila','Nuevo Leon','Chihuahua', 'Sonora'];
  selection!: string;
  clave= 'perrito'
 deleteCity(city:string):void{
  this.cities=this.cities.filter(e=>{return e!==city});
 }
  addNewCity(city:string):void{
  this.cities.push(city);
  }

  onCityClicked(city: string): void{
    console.log('City', city);
    this.selection=city;
  }
  clicked(name:string):void{
    this.name=name;
  }

  getClear(): void{
    this.selection='';
  }
}
