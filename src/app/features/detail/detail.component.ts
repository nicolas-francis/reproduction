import { Component, OnInit, TemplateRef } from '@angular/core';
import { ConnectorsService } from '../../services/connectors.service';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import '../../../assets/js/difflib.js';
import '../../../assets/js/diffview.js';
declare var difflib: any;
declare var diffview: any;

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
  public endUrl;
  public verifNumber;
  public details;
  public historys;
  public diff;

  //pour compare test début à enlever   vvvvvv
  public vieux = "VIEUX - asd asd asd\nasd\nqwer greww\nasd asd fewfewf behfhbef buwyhef iwejfsaiee beufhjdi jshdfiwasd\nasd\nqwer grewwasd asd asd\nasd\nqwer grewwasd asd asd\nasd\nqwer greww\nasd asd asd\nasd\nqwer grewwasd asd asd\nasd\nqwer";
  public nouveau = "NOUVEAU - qqw qqwee\nasdasd asd asd\nasd\nqwer greww\n jshdfiwasd\nasd\nqwer jshdfiwasd\nasd\nqwer iwejfsaiee beufhjdi  jshdfiwasd\nasd\nqwer grewwasd asd asd\nasdasd asd asd\nasd\nqwer greww\nasd asd fewfewf behfhbef buwyhef iwejfsaiee beufhjdi  jshdfiwasd\nasd\nqwer grewwasd asd asd\nasdasd asd asd\nasd\nqwer greww\nasd asd fewfewf behfhbef buwyhef iwejfsaiee beufhjdi  jshdfiwasd\nasd\nqwer grewwasd asd asd\nasd";
  //pour compare test fin à enlever     ^^^^^^

  constructor(
    private connectorsService: ConnectorsService, 
    private detailsService: DetailsService, 
    private historyService: HistoryService,
    private modalService: BsModalService
    ) { }

  ngOnInit() {
    //Prend l'id dans l'url
    this.endUrl = window.location.href;
    this.endUrl = this.endUrl.substr(window.location.href.lastIndexOf('/') + 1);
    this.verifNumber = +this.endUrl;

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
                  this.connectors = connectors;
                  this.filterCon();
                  }
                );
  }

  //All details
  getDetails() {
    return this.detailsService.getDetails()
                .subscribe(
                  details => {
                  console.log(details);
                  this.details = details;
                  this.filterDet();
                  }
                );
  }

  //All history
  getHistory() {
    return this.historyService.getHistory()
                .subscribe(
                  historys => {
                  console.log(historys);
                  this.historys = historys;
                  this.filterHist();
                  }
                );
  }

  //Compare modal
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template, { 
        backdrop: true,
        keyboard: false, 
        class: 'modal-lg'
      });

    //passer les deux versions des codes ici et enlever les variable de test
    //passer la date aussi pour les différentes versions
    this.compare(this.vieux, this.nouveau);
  }

  //Utilise la library du compare
  compare(nouveau, vieux) {
    var base = difflib.stringAsLines(vieux);
    var newtxt = difflib.stringAsLines(nouveau);

    var sm = new difflib.SequenceMatcher(base, newtxt);

    var opcodes = sm.get_opcodes();
    var contextSize = 6;
    contextSize = contextSize ? contextSize : null;
    
    this.diff = diffview.buildView({
        baseTextLines: base,
        newTextLines: newtxt,
        opcodes: opcodes,
        baseTextName: "Current Source",
        newTextName: "Old Revision",
        contextSize: contextSize,
        viewType: 0
    });

    this.diff = this.diff.outerHTML;
  }

  //Filtre les connecteurs pour afficher le bon avec le click fait avant
  filterCon() {
    this.connectors = this.connectors.filter(connector => connector.channelid === this.verifNumber);
  }

  //Filtre les details pour afficher le bon avec le click fait avant
  filterDet() {
    this.details = this.details.filter(detail => detail.channelid === this.verifNumber);
  }

  //Filtre les channel history pour afficher le bon avec le click fait avant
  filterHist() {
    this.historys = this.historys.filter(history => history.channelid === this.verifNumber);
  }
}
