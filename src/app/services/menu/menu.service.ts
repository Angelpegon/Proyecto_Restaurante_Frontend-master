import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private API_SERVER = "http://localhost:8080/platos/";
  constructor(private httpClient: HttpClient) { }

  public getAllPlatos(): Observable<any> {
    return this.httpClient.get(this.API_SERVER);
  }

  public savePlato(menu: any): Observable<any> {
    return this.httpClient.post(this.API_SERVER + "savePlato", menu)
  }

  public deletePlato(id: number): Observable<any> {
    return this.httpClient.delete(this.API_SERVER + "delete/" + id);
  }
}
