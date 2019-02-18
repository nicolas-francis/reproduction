import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sa-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  connectors = [
    {
        "id": 1,
        "status": "Enable",
        "name": "sourceConnector",
        "mode": "SOURCE",
        "type": "ISante File Reader",
        "site": "CSSHR",
        "system": "eClinibase"
    }, {
        "id": 2,
        "status": "Disable",
        "name": "CobasIT_OUT",
        "mode": "DESTINATION",
        "type": "TCP sender",
        "site": "CSSSMC",
        "system": "ClinibaseCI"
    }, {
        "id": 3,
        "status": "Deleted",
        "name": "Cortex_SRV_OUT",
        "mode": "DESTINATION",
        "type": "ISante File Writer",
        "site": "CSSHR",
        "system": "mediClinic"
    }
  ]

  details = [
    {
        "channelid": "264ff932-e84d-4ec9-8952-73225f14c53e",
        "serverid": "ac3712ed-9d05-45ae-ad5a-2874964ff932",
        "lastupdate": "2019-02-01 11:30",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar egestas tristique. Phasellus felis nibh, pretium et lectus eu, suscipit pretium risus. Suspendisse potenti. Quisque a tristique orci, sagittis pretium leo. Cras nisi felis, egestas non aliquet non, posuere sed lectus. Praesent ac lectus quis diam consequat auctor et vitae ligula. Nunc at felis vel nunc dignissim luctus. Morbi gravida ante nec urna condimentum, id laoreet massa dignissim. Aliquam eget sagittis massa. Cras feugiat eget massa maximus sagittis. Nulla at neque eu ex tristique ultricies nec ut sem. Aliquam posuere enim vitae mauris vulputate posuere in ut sapien. Donec porta magna mi, in aliquam neque interdum quis."
    }
  ]

  history = [
    {
      "revision": 196,
      "date": "2019-01-04 10:33:27"
    }, {
      "revision": 195,
      "date": "2019-01-03 11:00:48"
    }
  ]

  constructor() { }

  ngOnInit() {
    
  }

}
