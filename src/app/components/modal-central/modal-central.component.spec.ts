import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCentralComponent } from './modal-central.component';

describe('ModalCentralComponent', () => {
  let component: ModalCentralComponent;
  let fixture: ComponentFixture<ModalCentralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCentralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCentralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
