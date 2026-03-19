import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintCategoriesComponent } from './complaint-categories.component';

describe('ComplaintCategoriesComponent', () => {
  let component: ComplaintCategoriesComponent;
  let fixture: ComponentFixture<ComplaintCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComplaintCategoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComplaintCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
