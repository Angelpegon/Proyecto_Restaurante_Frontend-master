import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PedidoService } from 'src/app/services/pedido/pedido.service';
import { InicioComponent } from '../inicio.component';
import { PlatosxpedidoService } from 'src/app/services/platosxpedido/platosxpedido.service';
import { AgregarproductosComponent } from '../agregarproductos/agregarproductos.component';

@Component({
  selector: 'app-verpedido',
  templateUrl: './verpedido.component.html',
  styleUrls: ['./verpedido.component.css']
})
export class VerpedidoComponent implements OnInit {

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  pedidos: any;
  id: any;
  platosxpedido: any;
  displayedColumns: string[] = ['id', 'plato', 'cantidad', 'nota'];
  dataSource = new MatTableDataSource<any>;

  constructor(
    public pedidoService: PedidoService,
    public platosxpedidoService: PlatosxpedidoService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<VerpedidoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: InicioComponent
  ) {
    this.id = data;
  }
 
  ngOnInit(): void {
    this.platosxpedidoService.findPlatosxPedidoById(this.id).subscribe(resp => {
      this.platosxpedido = resp;
      this.cargarPedidos();
    },
      error => { console.error(error) }
    );
    this.pedidoService.getpedidobyid(this.id).subscribe(resp => {
      this.pedidos = resp;
    },
      error => { console.error(error) }
    );
  }

  cargarPedidos() {
    this.dataSource = new MatTableDataSource(this.platosxpedido)
    this.dataSource.paginator = this.paginator
    this.dataSource.sort = this.sort
  }
}
