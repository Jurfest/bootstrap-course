import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAltComponent } from './modal-alt.component';

describe('ModalAltComponent', () => {
  let component: ModalAltComponent;
  let fixture: ComponentFixture<ModalAltComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAltComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
