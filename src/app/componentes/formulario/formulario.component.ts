import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ListEmp } from '../../models/empleados.interface';
import { MaterialModule } from '../../models/material/material.module';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  nombre: string;
  apellido: string;
  celular: string;
  correo: string;

  private readonly newProperty = this.celular;

  constructor(private Empleadoservice: EmpleadosService) { }

  ngOnInit() {
  }
  addEmpleado(e): void {
    console.log(this.nombre, this.apellido, this.celular, this.correo);

    this.Empleadoservice.addEmpleado({
      nombre: this.nombre,
      apellido: this.apellido,
      celular: this.celular,
      correo: this.correo
    });

    this.nombre = '';
    this.apellido = '';
    this.celular = '';
    this.correo = '';
  }

}
