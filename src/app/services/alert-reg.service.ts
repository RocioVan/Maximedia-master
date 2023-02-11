import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertRegService {

  constructor() { }
  muestraMensaje(mensaje:string){

    alert(mensaje)


  }

}
