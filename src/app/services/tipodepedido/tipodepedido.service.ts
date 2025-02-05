import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipodepedidoService {
  private API_SERVER = "http://localhost:8080/tiposdepedido/";
  constructor(private httpClient: HttpClient) { }

  public getAllTiposdePedido(): Observable<any> {
    return this.httpClient.get(this.API_SERVER);
  }
}
