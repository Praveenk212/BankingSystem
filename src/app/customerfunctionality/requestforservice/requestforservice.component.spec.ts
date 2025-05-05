import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestforserviceComponent } from './requestforservice.component';

describe('RequestforserviceComponent', () => {
  let component: RequestforserviceComponent;
  let fixture: ComponentFixture<RequestforserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestforserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestforserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
