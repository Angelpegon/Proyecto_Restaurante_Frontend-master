import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pages } from 'src/app/interfaces/pages';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  totalIngresosHoy() {
    throw new Error('Method not implemented.');
  }
  private API_SERVER = "http://localhost:8080/pedidos/";

  constructor(private httpClient: HttpClient) { }

  public getAllPedidos(): Observable<any> {
    return this.httpClient.get(this.API_SERVER);
  }
  public savePedido(pedido: any): Observable<any> {
    return this.httpClient.post(this.API_SERVER + "savePedido", pedido);
  }
   public addPlatosxPedido(pedido: any): Observable<any> {
    return this.httpClient.post(this.API_SERVER + "addPlatosxPedido", pedido );
  }
  public finalizarPedido(pedido: any): Observable<any> {
    return this.httpClient.post(this.API_SERVER + "finalizarPedido", pedido);
  }
  public verPedidosActivosEnMesas(): Observable<any> {
    return this.httpClient.get(this.API_SERVER + "verPedidosActivosEnMesas");
  }
  public verPedidosActivosEnDomicilios(): Observable<any> {
    return this.httpClient.get(this.API_SERVER + "verPedidosActivosEnDomicilios");
  }
  public buscarPedidosporFecha(fechas: any): Observable<any> {
    return this.httpClient.post(this.API_SERVER + "buscarPedidosporFecha", fechas);
  }
  public buscarPedidosporText(text: any): Observable<any> {
    return this.httpClient.post(this.API_SERVER + "buscarPedidosporText", text);
  }
  public getpedidobyid(id: number): Observable<any> {
    return this.httpClient.get(this.API_SERVER + id);
  }
  public cancelarPedido(id: number): Observable<any> {
    return this.httpClient.delete(this.API_SERVER + "delete/" + id);
  }
  public editPedido(pedido: any): Observable<any> {
    return this.httpClient.post(this.API_SERVER + "editPedido", pedido);
  }
  public totalPedidos(): Observable<any> {
    return this.httpClient.get(this.API_SERVER + "totalPedidos");
  }
  public totalPedidosHoy(): Observable<any> {
    return this.httpClient.get(this.API_SERVER + "totalPedidosHoy");
  }
  public totalPedidosDomiciliosHoy(): Observable<any> {
    return this.httpClient.get(this.API_SERVER + "totalPedidosDomiciliosHoy");
  }
  public totalPedidosMesaHoy(): Observable<any> {
    return this.httpClient.get(this.API_SERVER + "totalPedidosMesaHoy");
  }
}
