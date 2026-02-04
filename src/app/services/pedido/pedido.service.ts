import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pages } from 'src/app/interfaces/pages';
import { Pedidos } from 'src/app/interfaces/pedidos';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private API_SERVER = "http://localhost:8080/pedidos/";

  constructor(private httpClient: HttpClient) { }

  getAllPedidos(page: number, size: number): Observable<Pages<Pedidos>> {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size);

    return this.httpClient.get<Pages<Pedidos>>(this.API_SERVER, { params });
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
