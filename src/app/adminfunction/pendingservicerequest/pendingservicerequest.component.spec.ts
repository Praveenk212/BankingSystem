import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingservicerequestComponent } from './pendingservicerequest.component';

describe('PendingservicerequestComponent', () => {
  let component: PendingservicerequestComponent;
  let fixture: ComponentFixture<PendingservicerequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingservicerequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingservicerequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
