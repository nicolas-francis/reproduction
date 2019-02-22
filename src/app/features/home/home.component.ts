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
  getChannel(site) {
    console.log("ID site : " + site.id);
  }

  //Channel click
  getDetail(channel) {
    console.log("ID channel : " + channel.id);
    this.router.navigate(['detail']);
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
    return this.channelsService.getChannels()
              .subscribe(
                channels => {
                console.log(channels);
                this.channels = channels
                }
              );
    }
}
