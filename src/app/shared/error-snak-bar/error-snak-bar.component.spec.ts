import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorSnakBarComponent } from './error-snak-bar.component';

describe('ErrorSnakBarComponent', () => {
  let component: ErrorSnakBarComponent;
  let fixture: ComponentFixture<ErrorSnakBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorSnakBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorSnakBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
