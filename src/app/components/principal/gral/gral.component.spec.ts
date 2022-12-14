import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GralComponent } from './gral.component';

describe('GralComponent', () => {
  let component: GralComponent;
  let fixture: ComponentFixture<GralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
