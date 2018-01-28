import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuuappsComponent } from './buuapps.component';

describe('BuuappsComponent', () => {
  let component: BuuappsComponent;
  let fixture: ComponentFixture<BuuappsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuuappsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuuappsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
