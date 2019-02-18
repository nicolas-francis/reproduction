import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sa-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  //mettre dans un service et appeler le service ici
  public connectors = require('../../../assets/api/IS/connectors.json');
  public details = require('../../../assets/api/IS/details.json');
  public history = require('../../../assets/api/IS/history.json');

  constructor() { }

  ngOnInit() {
    
  }

}
