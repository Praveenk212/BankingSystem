import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecquebookrequestComponent } from './checquebookrequest.component';

describe('ChecquebookrequestComponent', () => {
  let component: ChecquebookrequestComponent;
  let fixture: ComponentFixture<ChecquebookrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecquebookrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecquebookrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
