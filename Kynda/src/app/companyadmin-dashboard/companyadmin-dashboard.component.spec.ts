import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyadminDashboardComponent } from './companyadmin-dashboard.component';

describe('CompanyadminDashboardComponent', () => {
  let component: CompanyadminDashboardComponent;
  let fixture: ComponentFixture<CompanyadminDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyadminDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyadminDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
