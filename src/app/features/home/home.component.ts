import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //mettre dans un service et appeler le service ici
  public sites = require('../../../assets/api/IS/sites.json');
  public channels = require('../../../assets/api/IS/channels.json');

  constructor(private router: Router) { }

  ngOnInit() { }

  getChannel() {
    //changer pour faire apparêtre les channels reliés au site cliquer
    //passer le group lors du click pour faire afficher les bon channels

    this.router.navigate(['/']);
  }

  getDetail() {
    this.router.navigate(['detail']);
  }
}
