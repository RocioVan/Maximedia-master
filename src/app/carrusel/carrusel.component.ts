import { Component } from '@angular/core';
import {AlertRegService} from "../services/alert-reg.service";

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent {
  cliente1 = '../assets/imagen/conejo.jpg'
  cliente2 = '../assets/imagen/zara.jpeg'
  cliente3 = '../assets/imagen/fanta.jpg'
  cliente4 = '../assets/imagen/pepsi.jpeg'
  cliente5 = '../assets/imagen/mcdonalds.png'
  cliente6 = '../assets/imagen/hyundai.jpg'
  cliente7 = '../assets/imagen/adidas.jpg'
  cliente8 = '../assets/imagen/nike.jpg'
  cliente9 = '../assets/imagen/corona.jpg'
  cliente10 = '../assets/imagen/ps4.jpg'
  cliente11 = '../assets/imagen/iphone.png'

  colorTitle = 'gray'

  showVermas: boolean = false
  ocultar: string = "Ver mas"

  cambioVermas() {
    this.showVermas = !this.showVermas

    if(this.showVermas){
      this.showVermas = true;
      this.ocultar = "Ocultar"
    }
    else{
      this.ocultar = "Ver mas"
    }
  }

  constructor(private miMensaje:AlertRegService){}

  alerta(){
    this.miMensaje.muestraMensaje("Para poder ver este contenido debe registarse.");
  }

}
