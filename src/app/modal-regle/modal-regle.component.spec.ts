import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRegleComponent } from './modal-regle.component';

describe('ModalRegleComponent', () => {
  let component: ModalRegleComponent;
  let fixture: ComponentFixture<ModalRegleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalRegleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRegleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
