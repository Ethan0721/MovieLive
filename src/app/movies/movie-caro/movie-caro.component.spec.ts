import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCaroComponent } from './movie-caro.component';

describe('MovieCaroComponent', () => {
  let component: MovieCaroComponent;
  let fixture: ComponentFixture<MovieCaroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieCaroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCaroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
