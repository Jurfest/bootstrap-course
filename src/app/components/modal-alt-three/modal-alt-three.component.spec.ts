import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAltThreeComponent } from './modal-alt-three.component';

describe('ModalAltThreeComponent', () => {
  let component: ModalAltThreeComponent;
  let fixture: ComponentFixture<ModalAltThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAltThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAltThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
