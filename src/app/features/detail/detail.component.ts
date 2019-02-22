import { Component, OnInit, TemplateRef } from '@angular/core';
import { ConnectorsService } from '../../services/connectors.service';

//Bootstrap modal
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { DetailsService } from '../../services/details.service';
import { HistoryService } from '../../services/history.service';

@Component({
  selector: 'sa-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  modalRef: BsModalRef;

  public connectors;
  public details;
  public historys;

  constructor(
    private connectorsService: ConnectorsService, 
    private detailsService: DetailsService, 
    private historyService: HistoryService,
    private modalService: BsModalService
    ) { }

  ngOnInit() {
    this.getConnectors();
    this.getDetails();
    this.getHistory();
  }

  //All connectors
  getConnectors() {
    return this.connectorsService.getConnectors()
                .subscribe(
                  connectors => {
                  console.log(connectors);
                  this.connectors = connectors
                  }
                );
  }

  //All details
  getDetails() {
    return this.detailsService.getDetails()
                .subscribe(
                  details => {
                  console.log(details);
                  this.details = details
                  }
                );
  }

  //All history
  getHistory() {
    return this.historyService.getHistory()
                .subscribe(
                  historys => {
                  console.log(historys);
                  this.historys = historys
                  }
                );
  }

  //Compare modal
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template, { backdrop: 'static', keyboard: false, class: 'modal-lg' });
  }
}
