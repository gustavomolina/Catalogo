import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import { UrlService } from '../../provider/url.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  produtos: any;

  constructor(public http: HttpClient, public serviceUrl: UrlService) { 
      this.listProdutos();
      console.log(this.produtos);

  }

  listProdutos(){
    //GET na url 'http://localhost/Curso%20Udemy%20-%20Ionic%204%20e%205/catalogo/Catalogo/php/listDados'
    this.produtos = this.http.get(this.serviceUrl.getURL()+"listDados.php").pipe(map(res => res.json()))

    .subscribe(listDados => {
      
      this.produtos = listDados;
    });
/*
    
    //Coloca em formato JSON
    

    //O JSON retornado vai para a variavel 'list'
    .subscribe(
      listDados => {
           listDados;
      }
    );*/
    

  }


  ngOnInit() {
  }

}
