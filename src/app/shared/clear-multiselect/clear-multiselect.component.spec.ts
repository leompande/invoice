import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearMultiselectComponent } from './clear-multiselect.component';

describe('ClearMultiselectComponent', () => {
  let component: ClearMultiselectComponent;
  let fixture: ComponentFixture<ClearMultiselectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClearMultiselectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearMultiselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
