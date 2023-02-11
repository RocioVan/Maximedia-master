import { Component } from '@angular/core';

@Component({
  selector: 'app-cont-form',
  templateUrl: './cont-form.component.html',
  styleUrls: ['./cont-form.component.css']
})
export class ContFormComponent {

  user = {
    nombre: '',
    telefono: '',
    email: '',
    mensaje: ''
  };

  escondido: boolean = false;
  verUbicaciones: boolean = false;
  ocultarUbicaciones: string = "Ver Ubicaciones"


  colorTextForm = "white";

  colortext = 'gray';

  enviarMensaje() {

    this.escondido = true;

  }


  verCiudades() {
    this.verUbicaciones = !this.verUbicaciones

    if (this.verUbicaciones) {
      this.verUbicaciones = true;
      this.ocultarUbicaciones = "Regresar"
    } else {
      this.ocultarUbicaciones = "Ver Ubicaciones"
    }
  }
}
