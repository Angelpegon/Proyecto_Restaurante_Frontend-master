import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeseroService {

  private API_SERVER = "http://localhost:8080/meseros/";
  constructor(private httpClient: HttpClient) { }

  public getAllMeseros(): Observable<any> {
    return this.httpClient.get(this.API_SERVER);
  }

  public saveMesero(mesero: any): Observable<any> {
    return this.httpClient.post(this.API_SERVER, mesero)
  }

  public deleteMesero(id: number): Observable<any> {
    return this.httpClient.delete(this.API_SERVER + "delete/" + id);
  }
}
