import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import { CarruselComponent } from './carrusel/carrusel.component';
import { NosotrosComponent } from './nosotros/nosotros.component';

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ContFormComponent } from './cont-form/cont-form.component';

import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { OfrecemosComponent } from './ofrecemos/ofrecemos.component';
import { RouterModule,Routes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CarruselComponent,
    NosotrosComponent,
    NavbarComponent,
    HomeComponent,
    ContFormComponent,
    OfrecemosComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatListModule,
    FormsModule,
    AppRoutingModule,
    RouterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
