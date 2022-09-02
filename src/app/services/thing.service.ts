import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThingService {

  constructor() { }
}

export interface List{
  gongyingshang: string;
  cangku: string;
  dingdanzhuangtai: string;
  picture:any;
  mingcheng:string;
  yanse:string;
  size:string;
  danjia:number;
  shuliang:number;
  jiesuanzhanghu:string;
  money:number;
  qian:number;
  danhao:string;
  zhidanren:string;
  date:string;
  beizhu:string;
  fujian:string;

}
