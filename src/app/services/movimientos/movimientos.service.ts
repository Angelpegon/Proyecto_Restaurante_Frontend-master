import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovimientosService {

  private API_SERVER = "http://localhost:8080/movimientos/";
  constructor(private httpClient: HttpClient) { }

  public totalIngresosHoy(): Observable<any> {
    return this.httpClient.get(this.API_SERVER + "totalIngresosHoy");
  }

}
