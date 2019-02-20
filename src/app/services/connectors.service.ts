import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Connector } from '../../app/class/connector';

@Injectable({
  providedIn: 'root'
})
export class ConnectorsService {

  connectors = '../../../assets/api/IS/connectors.json';

  constructor(private http: HttpClient) { }

  getConnectors (): Observable<Connector[]> {
    return this.http.get<Connector[]>(this.connectors)
  }
}
