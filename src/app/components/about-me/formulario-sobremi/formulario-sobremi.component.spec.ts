import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioSobremiComponent } from './formulario-sobremi.component';

describe('FormularioSobremiComponent', () => {
  let component: FormularioSobremiComponent;
  let fixture: ComponentFixture<FormularioSobremiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioSobremiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioSobremiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
