import {Component, OnInit, ElementRef, AfterViewInit, AfterViewChecked} from '@angular/core';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-buuapps',
  templateUrl: './buuapps.component.html',
  styleUrls: ['./buuapps.component.scss']
})
export class BuuappsComponent implements OnInit, AfterViewChecked {
  buapps: any = new Array(80);
  Ptotal: number;
  Total: number;
  Pconsumed: number = 0;
  Ppor: number;

  constructor(private ele: ElementRef) {
  }

  ngOnInit() {
  }

  left() {
    if ((this.Pconsumed + this.Ptotal) < this.Total) {
      this.Pconsumed = this.Pconsumed + this.Ptotal;
      $('#prg').animate({"margin-left": "+=" + this.Ppor + "%"}, "slow");
      $("#sliderBu2").animate({"margin-left": "-=" + this.Ptotal + "px"}, "slow");
    }
  }

  right() {
    if ((this.Pconsumed - this.Ptotal) > -1) {
      this.Pconsumed = this.Pconsumed - this.Ptotal;
      $('#prg').animate({"margin-left": "-=" + this.Ppor + "%"}, "slow");
      $("#sliderBu2").animate({"margin-left": "+=" + this.Ptotal + "px"}, "slow");
    }
  }

  ngAfterViewChecked() {
    const total = document.getElementById('sliderBu2').offsetWidth;
    this.Total = total;
    let Pslide = document.getElementById('sliderBu').offsetWidth;
    this.Ptotal = Pslide;
    Pslide = Pslide * 100 / total;
    this.Ppor = Pslide;
    document.getElementById('prg').style.width = Pslide + '%';
  }

}
