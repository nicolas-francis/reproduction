import { Component, OnInit } from '@angular/core';
import { ConnectorsService } from '../../services/connectors.service';
import { DetailsService } from '../../services/details.service';
import { HistoryService } from '../../services/history.service';

@Component({
  selector: 'sa-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  //variables utilisé pour le html
  public connectors;
  public details;
  public historys;

  constructor(
    private connectorsService: ConnectorsService, 
    private detailsService: DetailsService, 
    private historyService: HistoryService
    ) { }

  ngOnInit() {
    this.getConnectors();
    this.getDetails();
    this.getHistory();
  }

  //tous les connecteurs
  getConnectors() {
    return this.connectorsService.getConnectors()
                .subscribe(
                  connectors => {
                  console.log(connectors);
                  this.connectors = connectors
                  }
                );
  }

  //tous les details
  getDetails() {
    return this.detailsService.getDetails()
                .subscribe(
                  details => {
                  console.log(details);
                  this.details = details
                  }
                );
  }

  //toute l'history
  getHistory() {
    return this.historyService.getHistory()
                .subscribe(
                  historys => {
                  console.log(historys);
                  this.historys = historys
                  }
                );
  }

  compare() {
    
  }

}
