import { Component, OnInit} from '@angular/core';
import { Equiposguard } from 'src/app/services/equipos.guard';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AppValidators } from 'src/@aplicacion/utils';
import { FormularioService } from './formulario.service';
import * as moment from 'moment';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  form: FormGroup;
  submit: boolean;

  constructor(
    private _service: FormularioService,
    private _formBuilder: FormBuilder,
    private _router: Router,
  ) {
    this.form = this._formBuilder.group({
      nombre: [null, [Validators.required, AppValidators.alfanumerico]],
      estadio: [null, [Validators.required, AppValidators.alfanumerico]],
      sitioWeb: [null, [Validators.required, AppValidators.paginaWeb]],
      nacionalidad: [null, [Validators.required, AppValidators.alfabetico]],
      fundacion: [null, [Validators.required]],
      entrenador: [null, [Validators.required, AppValidators.alfabetico]],
      capacidad: [null, [Validators.required, AppValidators.numerico]],
      valor: [null, [Validators.required, AppValidators.numerico]],
    });
    this.submit = false;
  }

  ngOnInit() {
  }

  close(): void {
  }

  objToArray(obj: any): any[] {
    return obj !== null ? Object.keys(obj) : [];
  }

  get nombre(): AbstractControl {
    return this.form.get('nombre');
  }
  get estadio(): AbstractControl {
    return this.form.get('estadio');
  }
  get sitioWeb(): AbstractControl {
    return this.form.get('sitioWeb');
  }
  get nacionalidad(): AbstractControl {
    return this.form.get('nacionalidad');
  }
  get fundacion(): AbstractControl {
    return this.form.get('fundacion');
  }
  get entrenador(): AbstractControl {
    return this.form.get('entrenador');
  }
  get capacidad(): AbstractControl {
    return this.form.get('capacidad');
  }
  get valor(): AbstractControl {
    return this.form.get('valor');
  }


  guardarHandle(event): void {
    this.submit = true;
    const formValue = this.form.value;
    formValue.fundacion = moment(formValue.fundacion).format('YYYY-MM-DD');
    this._service.crear(formValue)
      .then((resp) => {
        this._router.navigate([`/equipos/listar`]);
      });
  }

}
