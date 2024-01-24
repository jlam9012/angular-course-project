import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListGridComponent } from './shopping-list-grid.component';

describe('ShoppingListGridComponent', () => {
  let component: ShoppingListGridComponent;
  let fixture: ComponentFixture<ShoppingListGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShoppingListGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShoppingListGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
