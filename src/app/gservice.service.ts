import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GserviceService {

  constructor(private cliente:HttpClient) { };


  get(nombreLibro:String){
      console.log('Criterio de busqueda:'+nombreLibro);
     const volumes: object[] = [];
        const titulos: string[] = [];
        const url = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';
        this.cliente.get(url + nombreLibro).subscribe( (data: object[]) => {

            for(let i = 0; i < data['items'].length; i++) {

              console.log('VolumenInfo: '+data['items'][i]['volumeInfo']);
              console.log('Title: '+data['items'][i]['volumeInfo']['title']);

              //  volumes.push(data['items'][i]['volumeInfo']);
              //  titulos.push(data['items'][i]['volumeInfo']['title']);
            }
        }
        );
  }

}