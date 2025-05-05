import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditcardrequestComponent } from './creditcardrequest.component';

describe('CreditcardrequestComponent', () => {
  let component: CreditcardrequestComponent;
  let fixture: ComponentFixture<CreditcardrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditcardrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditcardrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
