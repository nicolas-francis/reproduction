import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Site } from '../../app/class/site';

@Injectable({
  providedIn: 'root'
})
export class SitesService {

  sites = '../../../assets/api/IS/sites.json';

  constructor(private http: HttpClient) { }
  
  getSites (): Observable<Site[]> {
    return this.http.get<Site[]>(this.sites)
  }
  
}
