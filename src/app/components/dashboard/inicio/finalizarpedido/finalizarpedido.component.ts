import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { InicioComponent } from '../inicio.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { PedidoService } from 'src/app/services/pedido/pedido.service';
import { PlatosxpedidoService } from 'src/app/services/platosxpedido/platosxpedido.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MediosdepagoService } from 'src/app/services/mediosdepago/mediosdepago.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-finalizarpedido',
  templateUrl: './finalizarpedido.component.html',
  styleUrls: ['./finalizarpedido.component.css']
})
export class FinalizarpedidoComponent implements OnInit {
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  pedidos: any;
  dataSource!: MatTableDataSource<any>;
  id: any;
  pedidoForm: FormGroup;
  mediosdepago: any;
  constructor(
    public fb: FormBuilder,
    public pedidosService: PedidoService,
    public mediosdepagoService: MediosdepagoService,
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<FinalizarpedidoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: InicioComponent
  ) {
    this.id = data;
    this.pedidoForm = this.fb.group({
      id: data,
      mediodepago:[],
    })
  }
  ngOnInit(): void {
    this.mediosdepagoService.getAllMediosdePago().subscribe(resp => {
      this.mediosdepago = resp;
    },
      error => { console.error(error) }
    );

  }
  cargarPedidos() {
    this.dataSource = new MatTableDataSource(this.pedidos);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  finalizar() {
    class Pedido {
      pedidos: any;
    }
    const pedido = new Pedido();
    pedido.pedidos = this.pedidoForm.value;
    this.pedidosService.finalizarPedido(pedido.pedidos).subscribe(resp => {
      this._snackBar.open('Pedido finalizado con exito', '', {
        duration: 500,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      })
      this.fakeLoading();
    },
      error => { console.error(error) }
    )
  }
  fakeLoading() {
    setTimeout(() => {
      //Redireccionamos al dashboard
      window.location.reload();
    }, 500);
  }

}