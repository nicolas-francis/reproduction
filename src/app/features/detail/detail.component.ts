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
  public connectorsTemp;
  public details;
  public historys;
  public diff;

  //pour compare test début   vvvvvv
  public vieux = "asd asd asd\nasd\nqwer greww\nasd asd fewfewf behfhbef buwyhef iwejfsaiee beufhjdi  jshdfiwasd\nasd\nqwer grewwasd asd asd\nasd\nqwer grewwasd asd asd\nasd\nqwer greww\nasd asd asd\nasd\nqwer grewwasd asd asd\nasd\nqwer";
  public nouveau = "qqw qqwee\nasdasd asd asd\nasd\nqwer greww\nasd asd fewfewf behfhbef buwyhef iwejfsaieeasdasdasdasdasdasdasd dsda beufhjdi  jshdfiwasd\nasd\nqwer grewwasd asd asd\nasdasd asd asd\nasd\nqwer greww\nasd asd fewfewf behfhbef buwyhef iwejfsaiee beufhjdi  jshdfiwasd\nasd\nqwer grewwasd asd asd\nasdasd asd asd\nasd\nqwer greww\nasd asd fewfewf behfhbef buwyhef iwejfsaiee beufhjdi  jshdfiwasd\nasd\nqwer grewwasd asd asd\nasdasd asd asd\nasd\nqwer greww\nasd asd fewfewf behfhbef buwyhef iwejfsaiee beufhjdi  jshdfiwasd\nasd\nqwer grewwasd asd asd\nasdasd asd asd\nasd\nqwer greww\nasd asd fewfewf behfhbef buwyhef iwejfsaiee beufhjdi  jshdfiwasd\nasd\nqwer grewwasd asd asd\nasdasd asd asd\nasd\nqwer greww\nasd asd fewfewf behfhbef buwyhef iwejfsaiee beufhjdi  jshdfiwasd\nasd\nqwer grewwasd asd asd\nasdasd asd asd\nasd\nqwer greww\nasd asd fewfewf behfhbef buwyhef iwejfsaiee beufhjdi  jshdfiwasd\nasd\nqwer grewwasd asd asd\nasdasd asd asd\nasd\nqwer greww\nasd asd fewfewf behfhbef buwyhef iwejfsaiee beufhjdi  jshdfiwasd\nasd\nqwer grewwasd asd asd\nasd";
  //pour compare test fin     ^^^^^^

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
      template, { 
        backdrop: true,
        keyboard: false, 
        class: 'modal-lg'
      });

    //passer les deux versions des codes ici et enlever les variable de test
    //passer la date aussi pour les différentes versions
    this.compare(this.vieux, this.nouveau);
  }

  compare(vieux, nouveau) {
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
}
