import { Injectable } from '@angular/core';

//URL para chamar os arquivos PHP que fazem a manipulação de dados


@Injectable({
  providedIn: 'root'
})
export class UrlService {

    url: string = "http://localhost/cursos_udemy/Catalogo/php/";
  constructor() { }

  getURL(){
      return this.url;
  }
}
