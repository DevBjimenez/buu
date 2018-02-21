import {Component, OnInit, ElementRef, AfterViewInit, AfterViewChecked} from '@angular/core';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-buuapps',
  templateUrl: './buuapps.component.html',
  styleUrls: ['./buuapps.component.scss']
})
export class BuuappsComponent implements OnInit, AfterViewChecked {
  buapps: any = [
    1, 2, 3, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2
  ];
  Ptotal: number;

  constructor(private ele: ElementRef) {
  }

  ngOnInit() {
    $("#cright" ).click(function() {
      $("#sliderBu2").animate({ "margin-left": "-=50px" }, "slow" );
    });
  }


  ngAfterViewChecked() {
    this.Ptotal = (this.buapps.length * 230) - 110;
    console.log(this.Ptotal, document.getElementById('sliderBu2').offsetWidth)
    let Pslide = document.getElementById('sliderBu').offsetWidth;
    Pslide = Pslide * 100 / this.Ptotal;
    document.getElementById('prg').style.width = Pslide + '%';


  }

}
