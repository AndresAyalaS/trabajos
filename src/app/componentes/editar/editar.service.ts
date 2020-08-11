import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class EditarService implements Resolve<any> {

  id: number;
  items: any[];
  onItemsChanged: BehaviorSubject<any>;

  constructor(
    private _httpClient: HttpClient
  ) {
    this.onItemsChanged = new BehaviorSubject({});
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    this.id = route.params.id;

    return new Promise((resolve, reject) => {
      Promise.all([
        this.getEquipo(this.id),
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
   * @param id //
   * @returns {Promise<any>}
   */
  public getEquipo(id: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this._httpClient.get(`http://api-rest-prueba-angular.us-east-2.elasticbeanstalk.com/equipos/consultar/${id}`)
        .subscribe((response: any) => {
          this.items = response;
          this.onItemsChanged.next(this.items);
          resolve(response);
        }, reject);
    });
  }

  /**
   * @param id
   * @param dato
   * @returns {Promise<any>}
   */
  editar(id: number, dato: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this._httpClient.put(`http://api-rest-prueba-angular.us-east-2.elasticbeanstalk.com/equipos/actualizar/${id}`,
        dato)
        .subscribe((response: any) => {
          resolve(response);
        }, reject);
    });
  }
}
