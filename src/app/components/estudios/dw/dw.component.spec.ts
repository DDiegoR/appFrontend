import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwComponent } from './dw.component';

describe('DwComponent', () => {
  let component: DwComponent;
  let fixture: ComponentFixture<DwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
