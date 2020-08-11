import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, PageEvent } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { map } from 'rxjs/operators';

import { registerLocaleData } from '@angular/common';
import localeCo from '@angular/common/locales/es-CO';
import { ListarService } from './listar.service';
import { Router } from '@angular/router';
import { Observable, merge } from 'rxjs';
registerLocaleData(localeCo, 'co');

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  dataSource: [] | null;
  displayedColumns: string[] = ['nombre', 'estadio', 'web', 'nacionalidad', 'fecha', 'entrenador', 'capacidad', 'valor', 'accion'];
  dataLength = 0;
  @ViewChild(MatPaginator, { static: true })
  paginator: MatPaginator;

  constructor(
    public _service: ListarService,
    private _router: Router,
    private _matDialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this._service.onItemsChanged.subscribe(
      (response) => {
        this.dataSource = response.content;
        this.dataLength = response.totalElements;
      }
    );

    this.paginator.page.subscribe(
      (event: PageEvent) => {
        this._service.getEquipos(event.pageIndex, event.pageSize);
      }
    );

  }

  eliminarHandle(event, content): void {
    if (confirm('¿Desea eliminar este registro?')) {
      this._service.eliminarHandle(content.id).then(() => {
        this._service.getEquipos(event.pageIndex, event.pageSize);
      });
    }

  }

}
