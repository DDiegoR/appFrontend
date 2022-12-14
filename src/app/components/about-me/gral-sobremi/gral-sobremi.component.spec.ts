import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GralSobremiComponent } from './gral-sobremi.component';

describe('GralSobremiComponent', () => {
  let component: GralSobremiComponent;
  let fixture: ComponentFixture<GralSobremiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GralSobremiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GralSobremiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
