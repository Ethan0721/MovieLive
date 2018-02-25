import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieBodyComponent } from './movie-body.component';

describe('MovieBodyComponent', () => {
  let component: MovieBodyComponent;
  let fixture: ComponentFixture<MovieBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
