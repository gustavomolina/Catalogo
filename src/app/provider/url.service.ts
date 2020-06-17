import { Injectable } from '@angular/core';

//URL para conexão com o banco de dados MySQL


@Injectable({
  providedIn: 'root'
})
export class UrlService {

    url: string = "";
  constructor() { }

  getURL(){
      return this.url;
  }
}
