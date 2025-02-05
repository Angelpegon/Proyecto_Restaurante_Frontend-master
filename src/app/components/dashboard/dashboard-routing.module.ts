import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartaComponent } from './carta/carta.component';
import { CrearplatoComponent } from './carta/crearplato/crearplato.component';
import { DashboardComponent } from './dashboard.component';
import { AgregarproductosComponent } from './inicio/agregarproductos/agregarproductos.component';
import { CrearpedidoComponent } from './inicio/crearpedido/crearpedido.component';
import { InicioComponent } from './inicio/inicio.component';
import { CrearmeseroComponent } from './mesero/crearmesero/crearmesero.component';
import { MeseroComponent } from './mesero/mesero.component';
import { ReportesComponent } from './reportes/reportes.component';
import { DomiciliosComponent } from './domicilios/domicilios.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { TipoComponent } from './tipo/tipo.component';
import { CreartipoComponent } from './tipo/creartipo/creartipo.component';

const routes: Routes = [
  {path:'',component: DashboardComponent,children:[
    {path:'',component:InicioComponent},
    {path:'domicilios',component:DomiciliosComponent},
    {path:'reportes',component:ReportesComponent},
    {path:'carta',component:CartaComponent},
    {path:'crearplato',component:CrearplatoComponent},
    {path:'mesero',component:MeseroComponent},
    {path:'crearmesero',component:CrearmeseroComponent},
    {path:'crearpedido',component:CrearpedidoComponent},
    {path:'agregarproductos',component:AgregarproductosComponent},
    {path:'pedidos',component:PedidosComponent},
    {path:'tipo',component:TipoComponent},
    {path:'creartipo',component:CreartipoComponent},

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
