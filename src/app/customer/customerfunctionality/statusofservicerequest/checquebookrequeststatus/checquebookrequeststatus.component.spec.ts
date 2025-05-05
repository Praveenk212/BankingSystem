import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecquebookrequeststatusComponent } from './checquebookrequeststatus.component';

describe('ChecquebookrequeststatusComponent', () => {
  let component: ChecquebookrequeststatusComponent;
  let fixture: ComponentFixture<ChecquebookrequeststatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecquebookrequeststatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecquebookrequeststatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
