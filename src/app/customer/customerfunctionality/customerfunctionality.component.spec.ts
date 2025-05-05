import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerfunctionalityComponent } from './customerfunctionality.component';

describe('CustomerfunctionalityComponent', () => {
  let component: CustomerfunctionalityComponent;
  let fixture: ComponentFixture<CustomerfunctionalityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerfunctionalityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerfunctionalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
