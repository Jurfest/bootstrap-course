import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloBootstrapComponent } from './hello-bootstrap.component';

describe('HelloBootstrapComponent', () => {
  let component: HelloBootstrapComponent;
  let fixture: ComponentFixture<HelloBootstrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloBootstrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
