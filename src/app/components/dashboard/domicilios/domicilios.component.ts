import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PedidoService } from 'src/app/services/pedido/pedido.service';
import { DialogComponentComponent } from '../inicio/dialog-component/dialog-component.component';
import { EditarpedidoComponent } from '../inicio/editarpedido/editarpedido.component';
import { FinalizarpedidoComponent } from '../inicio/finalizarpedido/finalizarpedido.component';
import { VerpedidoComponent } from '../inicio/verpedido/verpedido.component';
import { VerpedidodomicilioComponent } from '../inicio/verpedido/verpedidodomicilio/verpedidodomicilio.component';

@Component({
  selector: 'app-usuarios',
  templateUrl: './domicilios.component.html',
  styleUrls: ['./domicilios.component.css']
})
export class DomiciliosComponent implements OnInit {
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  pedidos: any;
  displayedColumns: string[] = ['id', 'fecha', 'nombreCliente', 'direccionCliente', 'options', 'estado'];
  dataSource = new MatTableDataSource<any>;
  constructor(
    public pedidoService: PedidoService,
    public dialog: MatDialog,
    ) { 
    }
    abrirDialogoCancelar(id: number) {
      const dialogo1 = this.dialog.open(DialogComponentComponent, {
        data: id
      });
    }
    abrirDialogoVerPedido(id: number) {
      const dialogo2 = this.dialog.open(VerpedidodomicilioComponent, {
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
    this.pedidoService.verPedidosActivosEnDomicilios().subscribe(resp => {
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

}
