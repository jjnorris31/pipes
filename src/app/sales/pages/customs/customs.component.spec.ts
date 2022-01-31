import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomsComponent } from './customs.component';

describe('CustomsComponent', () => {
  let component: CustomsComponent;
  let fixture: ComponentFixture<CustomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
