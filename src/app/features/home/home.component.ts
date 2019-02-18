import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import dataSite from '../../../assets/api/IS/sites.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sitesjson = (<any>dataSite);

  sites = [
    {
        "id": 1,
        "nom": "Site 1"
    }, {
        "id": 2,
        "nom": "Site 2"
    }, {
        "id": 3,
        "nom": "Site 3"
    }, {
        "id": 4,
        "nom": "Site 4"
    }, {
        "id": 5,
        "nom": "Site 5"
    }
  ]

  channels = [
    {
        "id": 1,
        "group": "Site 1",
        "status": "TRE01_AE",
        "name": "IS_SDI_kodfe",
        "revision": 65
    }, {
        "id": 2,
        "group": "Site 1",
        "status": "TRE01_AB",
        "name": "IS_SDI_asdqd",
        "revision": 65
    }, {
        "id": 3,
        "group": "Site 2",
        "status": "TRE04_AE",
        "name": "IS_SDI_lwoke",
        "revision": 65
    }
  ]

  constructor(private router: Router) { }

  ngOnInit() {

  }

  getChannel() {
    //changer pour faire apparêtre les channels reliés au site cliquer
    //passer le group lors du click pour faire afficher les bon channels

    console.log(this.sitesjson.nom);
    //this.router.navigate(['/']);
  }

  getDetail() {
    this.router.navigate(['detail']);
  }
}
