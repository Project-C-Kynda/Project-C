import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[HttpClientModule,
        RouterTestingModule]
    })
    .compileComponents()
    });
  
  it('should create login', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    expect(fixture).toBeTruthy();
  });
});
