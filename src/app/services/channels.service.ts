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
  getChannels (): Observable<Channel[]> {
    return this.http.get<Channel[]>(this.channels)
  }

  /*
  //un group de channel spécifique avec l'id
  getChannel (id: number): Observable<Channel> {
    const url = `${this.projetsUrl}/${id}`;
    return this.http.get<Projet>(url);
  }
  */
}
