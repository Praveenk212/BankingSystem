import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusofservicerequestComponent } from './statusofservicerequest.component';

describe('StatusofservicerequestComponent', () => {
  let component: StatusofservicerequestComponent;
  let fixture: ComponentFixture<StatusofservicerequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusofservicerequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusofservicerequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
