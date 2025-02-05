import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { PlatosxPedido } from 'src/app/interfaces/usuarios';
import { MenuService } from 'src/app/services/menu/menu.service';
import { MesaService } from 'src/app/services/mesa/mesa.service';
import { MeseroService } from 'src/app/services/mesero/mesero.service';
import { PlatosxpedidoService } from 'src/app/services/platosxpedido/platosxpedido.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { InicioComponent } from '../inicio.component';
import { VerpedidoComponent } from '../verpedido/verpedido.component';

@Component({
  selector: 'app-agregarproductos',
  templateUrl: './agregarproductos.component.html',
  styleUrls: ['./agregarproductos.component.css']
})
export class AgregarproductosComponent implements OnInit {
  listPlatosxPedido: PlatosxPedido[] = [];
  platosxpedidoForm: FormGroup;
  mesas: any;
  meseros: any;
  plato: any;
  platosxpedido: any;
  pedidos: any;
  displayedColumns: string[] = ['plato', 'cantidad', 'nota', 'opciones'];
  dataSource!: MatTableDataSource<any>;
  id: any;
  constructor(
    public fb: FormBuilder,
    public mesasService: MesaService,
    public meserosService: MeseroService,
    public menuService: MenuService,
    public platosxpedidoService: PlatosxpedidoService,
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<InicioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: InicioComponent
  ) {
    this.id = data;
    this.platosxpedidoForm = this.fb.group({
      plato: ['', Validators.required],
      cantidad: ['', Validators.required],
      nota: [''],
    })
  }

  ngOnInit(): void {
    this.mesasService.verMesasLibres().subscribe(resp => {
      this.mesas = resp;
    },
      error => { console.error(error) }
    );
    this.meserosService.getAllMeseros().subscribe(resp => {
      this.meseros = resp;
    },
      error => { console.error(error) }
    );
    this.menuService.getAllPlatos().subscribe(resp => {
      this.plato = resp;
    },
      error => { console.error(error) }
    );
    this.platosxpedidoService.getAllPlatosxPedido().subscribe(resp => {
      this.platosxpedido = resp;
    },
      error => { console.error(error) }
    );
    this.cargarPlatosxPedido();
  }

  cargarPlatosxPedido() {
    this.listPlatosxPedido = this.platosxpedidoService.getPlatosxPedido();
    this.dataSource = new MatTableDataSource(this.listPlatosxPedido)
  }
  guardar() {
    const platoxpedido: PlatosxPedido = {
      id: this.platosxpedidoForm.value.id,
      plato: this.platosxpedidoForm.value.plato,
      cantidad: this.platosxpedidoForm.value.cantidad,
      nota: this.platosxpedidoForm.value.nota,
    }
    this.platosxpedidoService.agregarPlatoxPedido(platoxpedido);
    this.cargarPlatosxPedido();
    this.platosxpedidoForm.reset();
    this._snackBar.open('Producto agregado con exito', '', {
      duration: 500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }
  addPlatosxPedido() {
    class Pedido {
      pedidos: any;
      platosxPedido: any;
    } 
    const pedido = new Pedido();
    pedido.pedidos= {};
    pedido.pedidos.id = this.id;
    pedido.platosxPedido = this.listPlatosxPedido;
    this.platosxpedidoService.addPlatosxPedido(pedido).subscribe(resp => {
      this._snackBar.open('Producto agregado con exito', '', {
        duration: 500,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      })
      this.fakeLoading();
    },
      error => { console.error(error) }
    )
  }
  fakeLoading(){
    setTimeout(() => {
      //Redireccionamos al dashboard
      window.location.reload();
   }, 500);
 }

}
