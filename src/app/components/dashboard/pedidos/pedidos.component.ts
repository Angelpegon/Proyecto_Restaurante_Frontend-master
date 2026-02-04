import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PedidoService } from 'src/app/services/pedido/pedido.service';
import { VerpedidoComponent } from '../inicio/verpedido/verpedido.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Pedidos } from 'src/app/interfaces/pedidos';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  buscarForm: FormGroup;
  pedidos: Pedidos[] = [];
  pageSize = 10;
  pageIndex = 0;
  totalRegistros = 0;
  displayedColumns: string[] = ['id', 'fecha', 'options', 'estado'];
  dataSource = new MatTableDataSource<any>;

  constructor(
    public fb: FormBuilder,
    public pedidoService: PedidoService,
    public dialog: MatDialog,
  ) {
    this.buscarForm = this.fb.group({
      fechaInicial: ['', Validators.required],
      fechaFinal: ['', Validators.required],
    })
  }
  abrirDialogoVerPedido(id: number) {
    const dialogo2 = this.dialog.open(VerpedidoComponent, {
      data: id
    });
  }
  ngOnInit(): void {
    this.cargarPedidos();
  }

  cargarPedidos() {
    this.pedidoService
      .getAllPedidos(this.pageIndex, this.pageSize)
      .subscribe(resp => {
        this.pedidos = resp.content;
        this.totalRegistros = resp.totalElements;
        this.dataSource = new MatTableDataSource(this.pedidos);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }
  cambiarPagina(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.cargarPedidos();
  }
  buscarPedidos() {
    class Fechas {
      fechaInicial: any;
      fechaFinal: any;
    }
    const fechas = new Fechas();
    fechas.fechaInicial = this.buscarForm.value.fechaInicial;
    fechas.fechaFinal = this.buscarForm.value.fechaFinal;
    this.pedidoService.buscarPedidosporFecha(fechas).subscribe(resp => {
      this.pedidos = resp;
      this.cargarPedidos();
    },
      error => { console.error(error) }
    )
  }
}
