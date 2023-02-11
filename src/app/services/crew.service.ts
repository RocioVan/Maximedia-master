import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrewService {

  crewVentas:any=["Javier Uraga","Pamela Vallejo","Francisco Roman","Miguel Leon"];
  crewDiseno:any=["Anita Uquillas","Nathalie Carrera","Ricardo Galindo"];
  crewProgra:any=["Xavier Ceballos","Rodolfo Burgos","Lourdes Rodriguez","Fernando Alcivar"]


  constructor() { }


  showCrewVentas(){
    return this.crewVentas;

  }

  showCrewDiseno(){
    return this.crewDiseno;

  }

  showCrewProgra(){
    return this.crewProgra
  }


}
