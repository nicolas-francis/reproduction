import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SitesService } from '../../services/sites.service';
import { ChannelsService } from '../../services/channels.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public sites;
  public channels;
  public channelTemp;
  selectedRow = {
    high: 0
  };

  constructor(
    private router: Router, 
    private sitesService: SitesService,
    private channelsService: ChannelsService
    ) { }

  ngOnInit() {
    this.getSites();
    this.getChannels();
  }

  //Site click
  getChannel(id) {
    //Selectionner la row clické
    this.selectedRow.high = id;
    
    //Changer les channels avec le site clické
    this.channels = this.channelTemp;
    this.channels = this.channels.filter(channel => channel.siteid === id);
  }

  //Channel click
  getDetail(channel) {
    this.channelsService.getChannel(channel.id);
    this.router.navigate(['detail/' + channel.id]);
  }

  //All sites
  getSites() {
    return this.sitesService.getSites()
                .subscribe(
                  sites => {
                  console.log(sites);
                  this.sites = sites
                  }
                );
  }

  //All channels
  getChannels() {
    //Selectionner la row clické
    this.selectedRow.high = 0;

    return this.channelsService.getChannels()
              .subscribe(
                channels => {
                console.log(channels);
                this.channels = channels;
                this.channelTemp = this.channels;
                }
              );
    }
}
