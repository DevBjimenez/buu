import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  listSelect: any = 1;
  constructor() { }

  ngOnInit() {
    sessionStorage.getItem('selected') ? this.listSelect = sessionStorage.getItem('selected') : 0;
  }

  ListSelect() {
    sessionStorage.setItem('selected', this.listSelect);
  }

}
