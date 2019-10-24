import { Component, OnInit, Inject } from '@angular/core';
import { EmpleadosService } from '../../services/empleados.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { inject } from '@angular/core/testing';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor(
    public empleadoService: EmpleadosService,
    private dialogRef: MatDialogRef<EditarComponent>,
    @Inject(MAT_DIALOG_DATA) data ) { }

  ngOnInit() {
  }

  guardAct() {
    this.empleadoService.editEpleado(this.empleadoService.selected);
    this.close();
  }

  close(): void {
    this.dialogRef.close();
  }

}
