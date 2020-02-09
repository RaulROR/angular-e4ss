import { Component } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
//import { Injectable } from '@angular/core';
import { GserviceService } from './gservice.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

//@Injectable()
export class AppComponent  {
  title = 'Angular';
  nombreLibro;

constructor(private servicio: GserviceService) {};

onSubmit(){
   this.servicio.get(this.nombreLibro);
 /* const volumes: object[] = [];
        const titulos: string[] = [];
        const url = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';
        this.cliente.get(url + this.nombreLibro).subscribe( (data: object[]) => {

            for(let i = 0; i < data['items'].length; i++) {

              console.log('VolumenInfo: '+data['items'][i]['volumeInfo']);
              console.log('Title: '+data['items'][i]['volumeInfo']['title']);

              //  volumes.push(data['items'][i]['volumeInfo']);
              //  titulos.push(data['items'][i]['volumeInfo']['title']);
            }
        }
        );
*/

}

}
