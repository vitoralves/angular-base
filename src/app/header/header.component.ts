import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

import { HeaderService } from './header.service';
import { UtilService } from '../util/util.service';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [HeaderService]
})
export class HeaderComponent implements OnInit {

  constructor(private service: HeaderService, private util: UtilService, private sanitizer: DomSanitizer) {

  }

  ngOnInit() {
   
  }

}
