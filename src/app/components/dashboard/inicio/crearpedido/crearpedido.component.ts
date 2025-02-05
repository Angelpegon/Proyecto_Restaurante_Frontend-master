import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { PlatosxPedido } from 'src/app/interfaces/usuarios';
import { ClientesService } from 'src/app/services/clientes/clientes.service';
import { MenuService } from 'src/app/services/menu/menu.service';
import { MesaService } from 'src/app/services/mesa/mesa.service';
import { MeseroService } from 'src/app/services/mesero/mesero.service';
import { PlatosxpedidoService } from 'src/app/services/platosxpedido/platosxpedido.service';
import { TipodepedidoService } from 'src/app/services/tipodepedido/tipodepedido.service';
import { CrearclientesComponent } from '../../clientes/crearclientes/crearclientes.component';


@Component({
  selector: 'app-crearpedido',
  templateUrl: './crearpedido.component.html',
  styleUrls: ['./crearpedido.component.css']
})

export class CrearpedidoComponent implements OnInit {
  listPlatosxPedido: PlatosxPedido[] = [];
  platosxpedidoForm: FormGroup;
  pedidoForm: FormGroup;
  clientesForm: FormGroup;
  searchForm: FormGroup;
  mesas: any;
  meseros: any;
  plato: any;
  tiposdepedidos: any;
  platosxpedido: any;
  clientes: any;
  displayedColumns: string[] = ['id', 'plato', 'cantidad', 'nota', 'opciones'];
  dataSource!: MatTableDataSource<any>;

  constructor(
    public fb: FormBuilder,
    public mesasService: MesaService,
    public meserosService: MeseroService,
    public menuService: MenuService,
    public clientesService: ClientesService,
    public platosxpedidoService: PlatosxpedidoService,
    public tiposdepedidoService: TipodepedidoService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
  ) {
    this.searchForm = this.fb.group({
      telefono: [],
    })
    this.clientesForm = this.fb.group({
      id: [],
      nombre: [],
      direccion: [],
      telefono: [],
    })
    this.platosxpedidoForm = this.fb.group({
      plato: ['', Validators.required],
      cantidad: ['', Validators.required],
      nota: [''],
    })
    this.pedidoForm = this.fb.group({
      tipodepedido: ['', Validators.required],
      mesero: [],
      mesa: [],
      estado: [],
    })
  }
  abrirDialogoCrearClientes() {
    const dialogo = this.dialog.open(CrearclientesComponent, {
    });
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
    this.tiposdepedidoService.getAllTiposdePedido().subscribe(resp => {
      this.tiposdepedidos = resp;
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
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }
  guardarpedido() {
    class Pedido {
      pedidos: any;
      platosxPedido: any;
    }
    const pedido = new Pedido();
    pedido.pedidos = this.pedidoForm.value;
    pedido.pedidos.cliente = this.clientesForm.value;
    pedido.platosxPedido = this.listPlatosxPedido;
    this.platosxpedidoService.savePedido(pedido).subscribe(resp => {
      this.pedidoForm.setErrors(null);
      this._snackBar.open('Pedido agregado con exito', '', {
        duration: 2000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      })
      setTimeout(() => {
        //Redireccionamos al dashboard
        window.location.assign('http://localhost:4200/dashboard');
      }, 500);
    },
      error => { console.error(error) }
    )
  }

  editarPlatoxPedido(platosxpedido: { plato: any; cantidad: number; nota: any; }) {
    this.platosxpedidoForm.setValue({
      plato: platosxpedido.plato,
      cantidad: platosxpedido.cantidad,
      nota: platosxpedido.nota,
    });
    this.eliminarPlatoxPedido(this.platosxpedido);
  }
  eliminarPlatoxPedido(index: number) {
    this.platosxpedidoService.eliminarPlatoxPedido(index);
    this.cargarPlatosxPedido();
  }
  buscarClientes() {
    const telefono = this.searchForm.get('telefono')?.value;
    this.clientesService.verClientesPorTelefono(telefono).subscribe(resp => {
      if (resp == '') {
        this.abrirDialogoCrearClientes();
      } else {
        this.clientesForm.setValue({
          id: resp[0].id,
          nombre: resp[0].nombre,
          direccion: resp[0].direccion,
          telefono: resp[0].telefono,
        });
        this._snackBar.open('Usuario Encontrado', '', {
          duration: 1000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom'
        })
      }
    },
      error => { console.error(error) }
    )
  }
}
