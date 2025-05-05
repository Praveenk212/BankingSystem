import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewaccountdetailComponent } from './viewaccountdetail.component';

describe('ViewaccountdetailComponent', () => {
  let component: ViewaccountdetailComponent;
  let fixture: ComponentFixture<ViewaccountdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewaccountdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewaccountdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
