import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreSbwbComponent } from './explore-sbwb.component';

describe('ExploreSbwbComponent', () => {
  let component: ExploreSbwbComponent;
  let fixture: ComponentFixture<ExploreSbwbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreSbwbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreSbwbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
