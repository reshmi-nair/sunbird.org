import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreLibraryComponent } from './explore-library.component';

describe('ExploreLibraryComponent', () => {
  let component: ExploreLibraryComponent;
  let fixture: ComponentFixture<ExploreLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
