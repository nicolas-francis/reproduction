import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Channel } from '../../app/class/channel';

@Injectable({
  providedIn: 'root'
})
export class ChannelsService {

  channels = '../../../assets/api/IS/channels.json';

  constructor(private http: HttpClient) { }

  //Tous les channels (loader au début)
  getChannels(): Observable<Channel[]> {
    return this.http.get<Channel[]>(this.channels)
  }
  
  //Passe l'id du channel en paramètre pour loader les bons connecteurs
  getChannel(id: number): Observable<Channel> {
    const url = 'http://localhost:4200/#/detail/' + id;
    return this.http.get<Channel>(url);
  }
  
}
