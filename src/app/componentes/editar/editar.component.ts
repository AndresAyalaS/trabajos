import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { EditarService } from './editar.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppValidators } from 'src/@aplicacion/utils';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  form: FormGroup;
  submit: boolean;
  element: any;
  id: any;

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    public _service: EditarService,
  ) {
    this.form = this._formBuilder.group({
      nombre: [null, [Validators.required, Validators.maxLength(60), AppValidators.alfanumerico]],
      estadio: [null, [Validators.required, Validators.maxLength(40), AppValidators.alfanumerico]],
      sitioWeb: [null, [Validators.required, Validators.maxLength(60), AppValidators.paginaWeb]],
      nacionalidad: [null, [Validators.required, Validators.maxLength(40), AppValidators.alfabetico]],
      fundacion: [null, [Validators.required]],
      entrenador: [null, [Validators.required, Validators.maxLength(40), AppValidators.alfabetico]],
      capacidad: [null, [Validators.required, Validators.maxLength(10), AppValidators.numerico]],
      valor: [null, [Validators.required, Validators.maxLength(10), AppValidators.numerico]],
    });
    this.submit = false;
  }

  ngOnInit() {
    this._service.onItemsChanged.subscribe(data => {
      this.form.patchValue({
        id: data.id,
        nombre: data.nombre,
        estadio: data.estadio,
        sitioWeb: data.sitioWeb,
        nacionalidad: data.nacionalidad,
        fundacion: data.fundacion,
        entrenador: data.entrenador,
        capacidad: data.capacidad,
        valor: data.valor,

      });

    });
  }


  guardarHandle(event): void {
    const formValue = this.form.value;
    this.submit = true;
    formValue.id = this._service.id;

    // se inyecta en el promise editar el id y el formValue
    this._service.editar(this._service.id, formValue)
      .then((resp) => {
        this.submit = false;
        this._router.navigate([`/equipos/listar`]);
      }
      );
  }

}
