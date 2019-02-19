import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { History } from '../../app/class/history';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  history = '../../../assets/api/IS/history.json';

  constructor(private http: HttpClient) { }

  getHistory (): Observable<History[]> {
    return this.http.get<History[]>(this.history)
  }
}
