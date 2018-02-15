import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  scroll: Boolean = false;
  constructor(private ele: ElementRef) { }

  ngOnInit() {
    // this.ele.nativeElement.querySelector('.sidebar')
    //   .addEventListener('scroll', (event) => {
    //     console.log(event);
    //     this.ele.nativeElement.querySelector('.sidebar').style.overflowY = 'scroll';
    //   });
  }

}
