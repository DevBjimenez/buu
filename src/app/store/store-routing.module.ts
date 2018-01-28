import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store.component'
import {BuuappsComponent} from './buuapps/buuapps.component';
const routes: Routes = [
  {path: '', component: StoreComponent, children: [
      {path: 'buuapps', component: BuuappsComponent}
    ]}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule {

}
