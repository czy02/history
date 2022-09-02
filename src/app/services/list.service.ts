import { Injectable } from '@angular/core';
import { List } from './thing.service';

@Injectable({
  providedIn: 'root'
})
export class ListService {


  constructor() { }
}

   export const lists:List[]=[
    {
      gongyingshang:'浙江义乌仓储',
      cangku:'一楼',
      dingdanzhuangtai:'待入库',
      mingcheng:'春夏男士衬衫',
      picture:'assets\\images\\02.jpg',
      yanse:'黑色',
      size:'M',
      danjia:85,
      shuliang:2,
      jiesuanzhanghu:'支付宝',
      money:333,qian:0,
      danhao:'ZFB202208131222',
      zhidanren:'陈志宇',
      date:'2022-08-13 12:22',
      beizhu:'',
      fujian:''
    },
    {
      gongyingshang:'武汉洪山仓储',
      cangku:'404',
      dingdanzhuangtai:'已入库',
      mingcheng:'春夏男士衬衫',
      picture:'assets\\images\\03.jpg',
      yanse:'黑色',
      size:'M',
      danjia:85,
      shuliang:2,
      jiesuanzhanghu:'支付宝',
      money:333,
      qian:0,
      danhao:'ZFB202208131224',
      zhidanren:'陈志宇',
      date:'2022-08-13 12:24',
      beizhu:'',
      fujian:''
    },
  ]
