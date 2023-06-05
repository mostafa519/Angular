import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsComonentComponent } from './products-comonent.component';

describe('ProductsComonentComponent', () => {
  let component: ProductsComonentComponent;
  let fixture: ComponentFixture<ProductsComonentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsComonentComponent]
    });
    fixture = TestBed.createComponent(ProductsComonentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
