import { Component, OnInit } from '@angular/core';
import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
  providers:[HomePage],
})
export class AddPage implements OnInit {

  list:any=[
    {
      gongyingshang:'武汉', 
      cangku:'四楼',
      account:'平安卡',
      money:100,
      saoyisao:true,
      ruku:true,
    },
    {
      gongyingshang:'咸宁',
      cangku:'二楼',
      account:'支付宝'
    }
  ]
  constructor(
     public home:HomePage
  ) {}

  ngOnInit() {
  }

  onSubmit(){
    this.home.add(this.list.gongyingshang);
  }

}
