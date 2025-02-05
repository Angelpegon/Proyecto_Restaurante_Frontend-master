import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediosdepagoService {

  private API_SERVER = "http://localhost:8080/mediosdepago/";
  constructor(private httpClient: HttpClient) { }

  public getAllMediosdePago(): Observable<any> {
    return this.httpClient.get(this.API_SERVER);
  }

  public saveMediosdePago(mediodepago: any): Observable<any> {
    return this.httpClient.post(this.API_SERVER, mediodepago)
  }

  public deleteMediosdePago(id: number): Observable<any> {
    return this.httpClient.delete(this.API_SERVER + "delete/" + id);
  }
}
