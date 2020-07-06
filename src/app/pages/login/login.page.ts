import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { UrlService } from 'src/app/provider/url.service';
import { map } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import { pipe } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;

  senha: string;


  constructor(public alert: AlertController, public urlService: UrlService, public http: HttpClient, public naav: NavController) { }

  ngOnInit() {
  }

  async logar() {
    //Verifica se algum dos campos não está preenchido
    if (this.email == undefined || this.senha == undefined) {

      const alert = await this.alert.create({
        header: 'Atenção',
        message: 'Preencha todos os campos!',
        buttons: ['OK']
      });
      await alert.present();

    } else {//Se os campos forem preenchidos
      
      this.http.get(this.urlService.getURL()+"login.php?email="+this.email+"&senha="+this.senha)
      .subscribe(
          
          (data:any) => {
            //Se o get retornou a mensagem de "sim" para o subcampo "logado" do campo "msg", o login foi feito com sucesso
           if(data.msg.logado=="sim"){
              //Vai para home
              this.naav.navigateBack('home');

            }
          }
        );
    }
  }

}
