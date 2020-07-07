import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, LoadingController } from '@ionic/angular';
import { UrlService } from 'src/app/provider/url.service';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { pipe } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;

  senha: string;


  constructor(public alert: AlertController, public urlService: UrlService, public http: HttpClient, public naav: NavController, public loading:LoadingController) { }

  ngOnInit() {
  }

  async logar() {
    //Verifica se algum dos campos não está preenchido
    if (this.email == undefined || this.senha == undefined) {
      this.urlService.alertas('Atenção', 'Preencha todos os campos');


    } else {//Se os campos forem preenchidos
      //Tela de carergamento
      const load = await this.loading.create({
        message: 'Verificando login...',
        spinner: "bubbles"
      });
      await load.present();

      this.http.get(this.urlService.getURL() + "login.php?email=" + this.email + "&senha=" + this.senha)
        .subscribe(

          (data: any) => {
            //Se o get retornou a mensagem de "sim" para o subcampo "logado" do campo "msg", o login foi feito com sucesso
            if (data.msg.logado == "sim") {
              //Verifica se o usuário está ativo no banco de dados
              if(data.dados.status == "Ativo"){
                //Encerra tela de carregamento
                load.dismiss();
                //Vai para home
                this.naav.navigateBack('home');
              }else{
                //Encerra tela de carregamento
                load.dismiss();
                this.urlService.alertas('Atenção', 'Usuário Bloqueado!');
              }              

            }else{
              //Encerra tela de carregamento
              load.dismiss();
              this.urlService.alertas('Atenção', 'Usuário ou senha incorretos!')
            }
          }
        );
    }
  }

}
