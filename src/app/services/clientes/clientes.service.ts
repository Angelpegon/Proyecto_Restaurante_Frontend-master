import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private API_SERVER = "http://localhost:8080/clientes/";
  constructor(private httpClient: HttpClient) { }

  public getAllClientes(): Observable<any> {
    return this.httpClient.get(this.API_SERVER);
  }
  public verClientesPorTelefono(telefono : any): Observable<any> {
    return this.httpClient.get(this.API_SERVER + telefono);
  }
  public saveClientes(cliente: any): Observable<any> {
    return this.httpClient.post(this.API_SERVER, cliente)
  }
  public deleteClientes(id: number): Observable<any> {
    return this.httpClient.delete(this.API_SERVER + "delete/" + id);
  }
}
