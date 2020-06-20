import { Injectable } from '@angular/core';

//URL para chamar os arquivos PHP que fazem a manipulação de dados


@Injectable({
  providedIn: 'root'
})
export class UrlService {

    url: string = "http://localhost/Curso%20Udemy%20-%20Ionic%204%20e%205/catalogo/Catalogo/php/";
  constructor() { }

  getURL(){
      return this.url;
  }
}
