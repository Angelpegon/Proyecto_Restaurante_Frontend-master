import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private API_SERVER = "http://localhost:8080/pedidos/";

  constructor(private httpClient: HttpClient) { }

  public getAllPedidos(): Observable<any> {
    return this.httpClient.get(this.API_SERVER);
  }
  public finalizarPedido(pedido:any): Observable<any> {
    return this.httpClient.post(this.API_SERVER + "finalizarPedido" , pedido);
  }
  public verPedidosActivosEnMesas(): Observable<any> {
    return this.httpClient.get(this.API_SERVER + "verPedidosActivosEnMesas");
  }
  public verPedidosActivosEnDomicilios(): Observable<any> {
    return this.httpClient.get(this.API_SERVER + "verPedidosActivosEnDomicilios");
  }
  public buscarPedidosporFecha(fechas:any): Observable<any> {
    return this.httpClient.post(this.API_SERVER + "buscarPedidosporFecha" , fechas);
  }
  public buscarPedidosporText(text:any): Observable<any> {
    return this.httpClient.post(this.API_SERVER + "buscarPedidosporText" , text);
  }
  public getpedidobyid(id:number): Observable<any> {
    return this.httpClient.get(this.API_SERVER + id);
  }
  public cancelarPedido(id:number): Observable<any> {
    return this.httpClient.delete(this.API_SERVER + "delete/" + id);
  }
  public editPedido(pedido: any): Observable<any> {
    return this.httpClient.post(this.API_SERVER + "editPedido", pedido);
  }
}
