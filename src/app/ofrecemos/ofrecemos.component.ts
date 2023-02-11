import { Component } from '@angular/core';


@Component({
  selector: 'app-ofrecemos',
  templateUrl: './ofrecemos.component.html',
  styleUrls: ['./ofrecemos.component.css']
})
export class OfrecemosComponent {
  urlImgMulEdu = '../assets/imagen/pro-aud.png'
  urlImgVidPub = '../assets/imagen/fotografia.jpg'
  urlStreaming = '../assets/imagen/post.jpg'
  urlCapacitaciones = '../assets/imagen/animacion.jpg'
  urlAnimacion3D = '../assets/imagen/animaciones3d.jpg'
  urlWebDesing = '../assets/imagen/webdesign.jpg'
  urlPhotography = '../assets/imagen/photography_Serve.jpg'
  urlAudio = '../assets/imagen/Audio.jpg'

  serTitle1 = 'Multimedia Educativa'
  serTitle2 = 'Videos Publicitarios'
  serTitle3 = 'Streaming'
  serTitle4 = 'Capacitaciones'
  serTitle5 = 'Animaciones 3D'
  serTitle6 = 'Diseño Web'
  serTitle7 = 'Fotografía'
  serTitle8 = 'Audio'
  colorTitle = 'gray'



  showMulti:boolean = true;
  showVideo:boolean = false;
  showStrea:boolean =false;
  showCapa:boolean = false;
  showAnim3D:boolean = false;
  showWebDesign:boolean = false;
  showPhotography:boolean = false;
  showAudio:boolean = false;
  showForm:boolean = false;
  escondido:boolean=false;


  user = {
    nombre:'',
    telefono:'',
    email:'',
    mensaje:''
  };


  listaStreaming=['Podcast', 'WebCast','Programas de TV'];
  listaVideos=['Videos de marca.', 'Videos explicativos.','Videos Animados.','Tutoriales.']

  cambioVideo(){
    this.showVideo = true;
    this.showMulti = false;
    this.showStrea=false;
    this.showCapa = false;
    this.showAnim3D = false;
    this.showWebDesign = false;
    this.showPhotography = false;
    this.showAudio = false;
    this.showForm=false;
  }

  cambioMulti(){
    this.showVideo = false;
    this.showMulti = true;
    this.showStrea=false;
    this.showCapa = false;
    this.showAnim3D = false;
    this.showWebDesign = false;
    this.showPhotography = false;
    this.showAudio = false;
    this.showForm=false;
  }

  cambioStrea(){
    this.showVideo = false;
    this.showMulti = false;
    this.showStrea= true;
    this.showCapa = false;
    this.showAnim3D = false;
    this.showWebDesign = false;
    this.showPhotography = false;
    this.showAudio = false;
    this.showForm=false;
  }

  cambioCapa(){
    this.showVideo = false;
    this.showMulti = false;
    this.showStrea= false;
    this.showCapa = true;
    this.showAnim3D = false;
    this.showWebDesign = false;
    this.showPhotography = false;
    this.showAudio = false;
    this.showForm=false;
  }

  cambioAnim3D(){
    this.showVideo = false;
    this.showMulti = false;
    this.showStrea= false;
    this.showCapa = false;
    this.showAnim3D = true;
    this.showWebDesign = false;
    this.showPhotography = false;
    this.showAudio = false;
    this.showForm=false;
  }

  cambioWebDesign(){
    this.showVideo = false;
    this.showMulti = false;
    this.showStrea= false;
    this.showCapa = false;
    this.showAnim3D = false;
    this.showWebDesign = true;
    this.showPhotography = false;
    this.showAudio = false;
    this.showForm=false;
  }

  cambioPhotography(){
    this.showVideo = false;
    this.showMulti = false;
    this.showStrea= false;
    this.showCapa = false;
    this.showAnim3D = false;
    this.showWebDesign = false;
    this.showPhotography = true;
    this.showAudio = false;
    this.showForm=false;
  }

  cambioAudio(){
    this.showVideo = false;
    this.showMulti = false;
    this.showStrea= false;
    this.showCapa = false;
    this.showAnim3D = false;
    this.showWebDesign = false;
    this.showPhotography = false;
    this.showAudio = true;
    this.showForm=false;
  }

  verFormulario(){
    this.showForm=true;
    this.escondido=false;
  }


  enviarMensaje(){
    this.escondido=true;


  }


}
