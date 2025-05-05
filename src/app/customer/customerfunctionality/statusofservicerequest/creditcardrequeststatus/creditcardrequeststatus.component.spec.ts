import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditcardrequeststatusComponent } from './creditcardrequeststatus.component';

describe('CreditcardrequeststatusComponent', () => {
  let component: CreditcardrequeststatusComponent;
  let fixture: ComponentFixture<CreditcardrequeststatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditcardrequeststatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditcardrequeststatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
