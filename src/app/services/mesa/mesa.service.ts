import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MesaService {
  private API_SERVER = "http://localhost:8080/mesas/";

  constructor(private httpClient: HttpClient) { }
  public verMesasLibres(): Observable<any> {
    return this.httpClient.get(this.API_SERVER + "verMesasLibres");
  }

}
