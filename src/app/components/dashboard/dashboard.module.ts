import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DomiciliosComponent } from './domicilios/domicilios.component';
import { ReportesComponent } from './reportes/reportes.component';
import { CartaComponent } from './carta/carta.component';
import { CrearplatoComponent } from './carta/crearplato/crearplato.component';
import { MeseroComponent } from './mesero/mesero.component';
import { CrearmeseroComponent } from './mesero/crearmesero/crearmesero.component';
import { CrearpedidoComponent } from './inicio/crearpedido/crearpedido.component';
import { AgregarproductosComponent } from './inicio/agregarproductos/agregarproductos.component';
import { DialogComponentComponent } from './inicio/dialog-component/dialog-component.component';
import { VerpedidoComponent } from './inicio/verpedido/verpedido.component';
import { EditarpedidoComponent } from './inicio/editarpedido/editarpedido.component';
import { FinalizarpedidoComponent } from './inicio/finalizarpedido/finalizarpedido.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { TipoComponent } from './tipo/tipo.component';
import { CreartipoComponent } from './tipo/creartipo/creartipo.component';
import { ClientesComponent } from './clientes/clientes.component';
import { CrearclientesComponent } from './clientes/crearclientes/crearclientes.component';
import { VerpedidodomicilioComponent } from './inicio/verpedido/verpedidodomicilio/verpedidodomicilio.component';
import { VerpedidomesasComponent } from './inicio/verpedido/verpedidomesas/verpedidomesas.component';



@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    NavbarComponent,
    DomiciliosComponent,
    ReportesComponent,
    CartaComponent,
    CrearplatoComponent,
    MeseroComponent,
    CrearmeseroComponent,
    CrearpedidoComponent,
    AgregarproductosComponent,
    DialogComponentComponent,
    VerpedidoComponent,
    EditarpedidoComponent,
    FinalizarpedidoComponent,
    PedidosComponent,
    TipoComponent,
    CreartipoComponent,
    ClientesComponent,
    CrearclientesComponent,
    VerpedidodomicilioComponent,
    VerpedidomesasComponent,
  
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
