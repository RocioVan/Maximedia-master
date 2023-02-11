import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { OfrecemosComponent } from "./ofrecemos/ofrecemos.component";
import { CarruselComponent } from "./carrusel/carrusel.component";
import { NosotrosComponent} from "./nosotros/nosotros.component";
import { ContFormComponent} from "./cont-form/cont-form.component";

const routers: Routes = [
  {path:"home",component:HomeComponent},
  {path:"ofrecemos",component:OfrecemosComponent},
  {path:"carrusel",component:CarruselComponent},
  {path:"nosotros",component:NosotrosComponent},
  {path:"contacto",component:ContFormComponent},
  {path:"",component:HomeComponent}
];

@NgModule({
  declarations:[],
  imports: [
    CommonModule,
    RouterModule.forRoot(routers)
  ]
})
export class AppRoutingModule { }
