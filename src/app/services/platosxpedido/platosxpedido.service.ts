import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlatosxPedido } from 'src/app/interfaces/usuarios';

@Injectable({
  providedIn: 'root'
})
export class PlatosxpedidoService {
  private API_SERVER = "http://localhost:8080/platosxpedido/";

  listPlatosxPedido: PlatosxPedido[] = [
  ]
  constructor(private httpClient: HttpClient) { }

  getPlatosxPedido() {
    return this.listPlatosxPedido.slice();
  }
  eliminarPlatoxPedido(platoxpedido: number) {
    this.listPlatosxPedido.splice(platoxpedido, 1);
  }
  agregarPlatoxPedido(platoxpedido: PlatosxPedido) {
    this.listPlatosxPedido.push(platoxpedido);
  }
  public savePedido(pedido: any): Observable<any> {
    return this.httpClient.post(this.API_SERVER + "savePedido", pedido);
  }
  public addPlatosxPedido(pedido: any): Observable<any> {
    return this.httpClient.post(this.API_SERVER + "addPlatosxPedido", pedido );
  }
  public editPedido(pedido: any): Observable<any> {
    return this.httpClient.post(this.API_SERVER + "editPedido", pedido);
  }
  public findPlatosxPedidoById(id: number): Observable<any> {
    return this.httpClient.get(this.API_SERVER + id);
  }
  public getAllPlatosxPedido(): Observable<any> {
    return this.httpClient.get(this.API_SERVER);
  }
  public deletePlatoxPedido(id: number): Observable<any> {
    return this.httpClient.delete(this.API_SERVER + "delete/" + id);
  }
}
