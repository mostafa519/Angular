import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentIproductComponent } from './parent-iproduct.component';

describe('ParentIproductComponent', () => {
  let component: ParentIproductComponent;
  let fixture: ComponentFixture<ParentIproductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentIproductComponent]
    });
    fixture = TestBed.createComponent(ParentIproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
