import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAltTwoComponent } from './modal-alt-two.component';

describe('ModalAltTwoComponent', () => {
  let component: ModalAltTwoComponent;
  let fixture: ComponentFixture<ModalAltTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAltTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAltTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
