import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditReceiptComponent } from './add-edit-receipt.component';

describe('AddEditReceiptComponent', () => {
  let component: AddEditReceiptComponent;
  let fixture: ComponentFixture<AddEditReceiptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditReceiptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
