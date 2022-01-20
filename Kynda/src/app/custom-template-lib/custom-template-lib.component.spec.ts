import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CustomTemplateLibComponent } from './custom-template-lib.component';

describe('CustomTemplateLibComponent', () => {
  let component: CustomTemplateLibComponent;
  let fixture: ComponentFixture<CustomTemplateLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomTemplateLibComponent ],
      imports : [
        HttpClientModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTemplateLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
