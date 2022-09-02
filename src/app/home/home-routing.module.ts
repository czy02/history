import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path:'home',
    component:HomePage,
    children:[
      {
        path:'home',
        loadChildren:()=>import('../home/home.module').then(m=>m.HomePageModule)
      },
      {
        path:'bought',
        loadChildren:()=>import('../bought/bought.module').then(m=>m.BoughtPageModule)
      }
    ]

  },
  {
    path: '',
    component: HomePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
