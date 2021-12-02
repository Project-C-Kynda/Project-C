import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTemplateLibComponent } from './custom-template-lib.component';

describe('CustomTemplateLibComponent', () => {
  let component: CustomTemplateLibComponent;
  let fixture: ComponentFixture<CustomTemplateLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomTemplateLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTemplateLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
