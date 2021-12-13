import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyadminAccountComponent } from './companyadmin-account.component';

describe('CompanyadminAccountComponent', () => {
  let component: CompanyadminAccountComponent;
  let fixture: ComponentFixture<CompanyadminAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyadminAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyadminAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
