import { Injectable } from '@angular/core';

import { ListEmp } from '../models/empleados.interface';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  empleados: ListEmp[];

  public selected = {
    nombre: '',
    apellido: '',
    celular: '',
    correo: '',
  };

  public pos;

  constructor() {
    console.log('see');
    this.empleados = [];
  }

  getEmpleados(): ListEmp[] {
    this.empleados = JSON.parse(localStorage.getItem('empleados'));

    if (localStorage.getItem('empleados') === null) {
      this.empleados = [];
    } else {
      this.empleados = JSON.parse(localStorage.getItem('empleados'));
    }
    return this.empleados;
  }

  addEmpleado(empleado: ListEmp): void {
    let empleados: ListEmp[];

    if (localStorage.getItem('empleados') === null) {
      empleados.push(empleado);
      empleados = [];
      empleados.unshift(empleado);
      localStorage.setItem('empleados', JSON.stringify(empleados));
    } else {
      empleados = JSON.parse(localStorage.getItem('empleados'));
      empleados.unshift(empleado);
      localStorage.setItem('empleados', JSON.stringify(empleados));
    }
  }

  editEpleado(empleado: ListEmp) {

    this.empleados[this.pos] =  empleado;
    localStorage.setItem('empleados', JSON.stringify(this.empleados));
    this.empleados = JSON.parse(localStorage.getItem('empleados'));
  }

  eliminarEmpleado(empleado: ListEmp) {
    for (let i = 0; i < this.empleados.length; i++) {
      if (empleado === this.empleados[i]) {
        this.empleados.splice(i, 1);
        localStorage.setItem('empleados', JSON.stringify(this.empleados));
      }
    }
  }
}
