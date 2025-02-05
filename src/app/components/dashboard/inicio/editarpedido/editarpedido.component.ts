import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MesaService } from 'src/app/services/mesa/mesa.service';
import { MeseroService } from 'src/app/services/mesero/mesero.service';
import { InicioComponent } from '../inicio.component';
import { PedidoService } from 'src/app/services/pedido/pedido.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editarpedido',
  templateUrl: './editarpedido.component.html',
  styleUrls: ['./editarpedido.component.css']
})
export class EditarpedidoComponent implements OnInit {
  pedidoForm: FormGroup;
  mesas: any;
  meseros: any;
  id: any;
  pedidos: any;
  constructor(
    public fb: FormBuilder,
    public mesasService: MesaService,
    public meserosService: MeseroService,
    public pedidosService: PedidoService,
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<InicioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: InicioComponent
  ) {
    this.id = data;
    this.pedidoForm = this.fb.group({
      id: data,
      mesero: [ ],
      mesa: [ ],
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
  }
  editarpedido() {
    class Pedido {
      pedidos: any;
    }
    const pedido = new Pedido();
    pedido.pedidos = this.pedidoForm.value;
    this.pedidosService.editPedido(pedido.pedidos).subscribe(resp => {
      this._snackBar.open('Pedido editado con exito', '', {
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

