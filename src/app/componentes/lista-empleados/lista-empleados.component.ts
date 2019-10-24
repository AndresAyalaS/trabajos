import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

import { ListEmp } from '../../models/empleados.interface';

import { EmpleadosService } from '../../services/empleados.service';
import { element } from 'protractor';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { EditarComponent } from '../editar/editar.component';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {

  empleados: ListEmp[] = [];

  public displayedColumns: string[] = ['nombre', 'apellido', 'celular', 'correo', 'accion'];
  public dataSource = new MatTableDataSource();


  constructor(
    public empleadoService: EmpleadosService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.empleados = this.empleadoService.getEmpleados();
  }

  addEmpleado(empleado: ListEmp) {
    console.log('see212');
    this.empleadoService.addEmpleado(empleado);
  }

  elimimarEmpleado(empleado: ListEmp) {
    if (confirm ('desea eliminar el empleado?')) {
      this.empleadoService.eliminarEmpleado(empleado);
    }
  }

  editEmpleado( element: { nombre: string; apellido: string; celular: string; correo: string; } , pos?: number) {
    this.openModal();
    this.empleadoService.selected = element;
    this.empleadoService.pos = pos;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openModal(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      title: 'modal'
    };
    dialogConfig.autoFocus = true;
    this.dialog.open(EditarComponent, dialogConfig);
  }

}

