import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PedidoService } from 'src/app/services/pedido/pedido.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InicioComponent } from '../inicio.component';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dialog-component',
  templateUrl: './dialog-component.component.html',
  styleUrls: ['./dialog-component.component.css']
})
export class DialogComponentComponent implements OnInit {

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  pedidos: any;
  dataSource!: MatTableDataSource<any>;
  id: any;
  pedidoForm: any;
  mesa: any;
  constructor(
    public fb: FormBuilder,
    public pedidoService: PedidoService,
    public dialogRef: MatDialogRef<InicioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: InicioComponent
  ) {
    this.id = data;
   console.log(data)
    this.pedidoForm = this.fb.group({
      id: data,
      estado: [ ],
    })
  }

  ngOnInit(): void {
    this.pedidoService.getAllPedidos().subscribe(resp => {
      this.pedidos = resp;
      this.cargarPedidos();
    },
      error => { console.error(error) }
    );
  }
  cargarPedidos() {
    this.dataSource = new MatTableDataSource(this.pedidos);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  cancelar() {
    this.pedidoService.cancelarPedido(this.id).subscribe(resp => {
      this.fakeLoading();
    })
  }
  fakeLoading() {
    setTimeout(() => {
      //Redireccionamos al dashboard
      window.location.reload();
    },);
  }
}
