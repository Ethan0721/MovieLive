import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbdCarouselConfig } from './movie-caro.component';

describe('MovieCaroComponent', () => {
  let component: NgbdCarouselConfig;
  let fixture: ComponentFixture<NgbdCarouselConfig>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbdCarouselConfig ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbdCarouselConfig);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
