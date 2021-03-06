import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BuuappsComponent } from './buuapps/buuapps.component';

@NgModule({
  imports: [
    CommonModule,
    StoreRoutingModule
  ],
  declarations: [StoreComponent, SidebarComponent, BuuappsComponent]
})
export class StoreModule { }
