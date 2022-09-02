import { Component } from '@angular/core';
import { List } from '../services/thing.service';
import { lists } from '../services/list.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public list=lists;
  constructor() {}


  add(gongyingshang:string):void{
    gongyingshang=gongyingshang.trim();
    
  }
}
