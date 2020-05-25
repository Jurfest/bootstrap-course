import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCentralTwoComponent } from './modal-central-two.component';

describe('ModalCentralTwoComponent', () => {
  let component: ModalCentralTwoComponent;
  let fixture: ComponentFixture<ModalCentralTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCentralTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCentralTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
