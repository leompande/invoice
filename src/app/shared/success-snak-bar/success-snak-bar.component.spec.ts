import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessSnakBarComponent } from './success-snak-bar.component';

describe('SuccessSnakBarComponent', () => {
  let component: SuccessSnakBarComponent;
  let fixture: ComponentFixture<SuccessSnakBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessSnakBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessSnakBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
