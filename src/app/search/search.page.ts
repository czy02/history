import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
   
  myDate=new Date().toLocaleDateString()

  public print:any={
    printSL:false,
  }

  constructor() { }

  ngOnInit() {
  }

}
