import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { StartButtonComponent } from './start-button/start-button.component';
import { FormNewItemComponent } from './form-new-item/form-new-item.component';
import { CitiesComponent } from './cities/cities.component';
import { FilterPipePipe } from './Pipes/filter-pipe.pipe';
import { ContactComponent } from './contact/contact.component';
import { ContactReactiveComponent } from './contact-reactive/contact-reactive.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ApartadosComponent } from './apartados/apartados.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    StartButtonComponent,
    FormNewItemComponent,
    CitiesComponent,
    FilterPipePipe,
    ContactComponent,
    ContactReactiveComponent,
    HomeComponent,
    HeaderComponent,
    ApartadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
