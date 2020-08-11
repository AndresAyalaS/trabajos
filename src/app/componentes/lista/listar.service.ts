import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ListarService implements Resolve<any> {

  onItemsChanged: BehaviorSubject<any>;


  constructor(
    private _httpClient: HttpClient
  ) {
    this.onItemsChanged = new BehaviorSubject({});
  }

  /**
   * Resolver
   *
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {

    return new Promise((resolve, reject) => {
      Promise.all([
        this.getEquipos()
      ]).then(
        () => {
          resolve();
        },
        reject
      );
    });
  }

  /**
   *
   *
   */
  public getEquipos(pagina: number = 0, cantidad: number= 5): Promise<any> {
    const url = `http://api-rest-prueba-angular.us-east-2.elasticbeanstalk.com/equipos/listar/${pagina}/${cantidad}`;
    return new Promise((resolve, reject) => {
      this._httpClient.get(url)
        .subscribe((response: any) => {
          this.onItemsChanged.next(response);
          resolve();
        }, reject);
    });
  }

  eliminarHandle(id: number): Promise<any> {
    const url = `http://api-rest-prueba-angular.us-east-2.elasticbeanstalk.com/equipos/eliminar/${id}`;
    return new Promise((resolve, reject) => {
      this._httpClient.delete(url)
        .subscribe((response: any) => {
          resolve(response);
        }, reject);
    });
  }
}
