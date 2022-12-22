import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesComponent } from './cities/cities.component';
import { ContactReactiveComponent } from './contact-reactive/contact-reactive.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SeleccionComponent } from './seleccion/seleccion.component';
import { StartButtonComponent } from './start-button/start-button.component';

const routes: Routes = [
  { path:'contact-reactive', component:ContactReactiveComponent },
  { path:'contact-template', component:ContactComponent },
  { path:'cities', component:HomeComponent },
  { path:'GuessTheWord', component:StartButtonComponent },
  { path:'', component:SeleccionComponent },
  {path:'**', component:PagenotfoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
