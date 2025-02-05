import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PedidoService } from 'src/app/services/pedido/pedido.service';
import { DialogComponentComponent } from './dialog-component/dialog-component.component';
import { EditarpedidoComponent } from './editarpedido/editarpedido.component';
import { FinalizarpedidoComponent } from './finalizarpedido/finalizarpedido.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VerpedidomesasComponent } from './verpedido/verpedidomesas/verpedidomesas.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  buscarForm: FormGroup;
  pedidos: any;
  displayedColumns: string[] = ['id', 'fecha', 'mesa', 'mesero', 'options', 'estado'];
  dataSource = new MatTableDataSource<any>;
 
  constructor(
    public fb: FormBuilder,
    public pedidoService: PedidoService,
    public dialog: MatDialog,
  ) {
    this.buscarForm = this.fb.group({
      text : ['', Validators.required],
    })
  }

  abrirDialogoCancelar(id: number) {
    const dialogo1 = this.dialog.open(DialogComponentComponent, {
      data: id
    });
  }
  abrirDialogoVerPedido(id: number) {
    const dialogo2 = this.dialog.open(VerpedidomesasComponent, {
      data: id
    });
  }
  abrirDialogoEditarPedido(id: number) {
    const dialogo3 = this.dialog.open(EditarpedidoComponent, {
      data: id
    });
  }
  abrirDialogoFinalizarPedido(id: number) {
    const dialogo4 = this.dialog.open(FinalizarpedidoComponent, {
      data: id
    });
  }
  ngOnInit(): void {

    this.pedidoService.verPedidosActivosEnMesas().subscribe(resp => {
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

  cancelar(pedidos: any) {
    this.pedidoService.cancelarPedido(pedidos.id).subscribe(resp => {
      if (resp === true) {
        this.pedidos.pop(pedidos);
        this.cargarPedidos();
      }
    })
  }
 
  buscarPedidos() {
    this.pedidoService.buscarPedidosporText(this.buscarForm.value).subscribe(resp => {
      this.pedidos = resp;
      this.cargarPedidos();
    },
      error => { console.error(error) }
    )
  }
}
