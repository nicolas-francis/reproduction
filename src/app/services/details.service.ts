import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Detail } from '../../app/class/detail';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  details = '../../../assets/api/IS/details.json';

  constructor(private http: HttpClient) { }

  getDetails (): Observable<Detail[]> {
    return this.http.get<Detail[]>(this.details)
  }
}
