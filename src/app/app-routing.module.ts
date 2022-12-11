import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesComponent } from './cities/cities.component';
import { ContactReactiveComponent } from './contact-reactive/contact-reactive.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { StartButtonComponent } from './start-button/start-button.component';

const routes: Routes = [
  { path:'', redirectTo:'/GuessTheWord', pathMatch:'full' },
  { path:'contact-reactive', component:ContactReactiveComponent },
  { path:'contact-template', component:ContactComponent },
  { path:'cities', component:HomeComponent },
  { path:'GuessTheWord', component:StartButtonComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
