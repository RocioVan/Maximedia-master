import { Component } from '@angular/core';
import {CrewService} from "../services/crew.service";



@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css'],

})
export class NosotrosComponent {

  listaVentas:any=[];
  listaDiseno:any=[];
  listaProgra:any=[];

  colorTitle = 'gray'

  titleDisen: string = "Diseñadores"
  titleProg: string = "Programadores"
  titleFoto: string = "Fotógrafos"


  constructor(private crewVentas:CrewService, private crewDiseno:CrewService, private crewProgra:CrewService) {
    this.listaVentas = crewVentas.showCrewVentas();
    this.listaDiseno = crewDiseno.showCrewDiseno();
    this.listaProgra = crewProgra.showCrewProgra();
  }



}
