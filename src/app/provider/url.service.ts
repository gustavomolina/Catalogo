import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

//URL para chamar os arquivos PHP que fazem a manipulação de dados


@Injectable({
  providedIn: 'root'
})
export class UrlService {

  url: string = "http://localhost/cursos_udemy/Catalogo/php/";

  constructor(public alert: AlertController) { }

  getURL(){
      return this.url;
  }


  //Mensagem genérica de alerta com botão de 'OK'
  async alertas(titulo, msg){
    const alert = await this.alert.create({
      header: titulo,
      message: msg,
      buttons: [
        'OK'
      ]
    });
    await alert.present();
  }
}
