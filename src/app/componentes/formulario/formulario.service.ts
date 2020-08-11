import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  /**
   *
   */
  public crear(dato: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this._httpClient.post(`http://api-rest-prueba-angular.us-east-2.elasticbeanstalk.com/equipos/crear`, dato)
        .subscribe((response: any) => {
          resolve(response);
        }, reject);
    });
  }
}
