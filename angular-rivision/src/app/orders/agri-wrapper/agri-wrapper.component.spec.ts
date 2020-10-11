import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgriWrapperComponent } from './agri-wrapper.component';

describe('AgriWrapperComponent', () => {
  let component: AgriWrapperComponent;
  let fixture: ComponentFixture<AgriWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgriWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgriWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
