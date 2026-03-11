import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilemanageComponent } from './profilemanage.component';

describe('ProfilemanageComponent', () => {
  let component: ProfilemanageComponent;
  let fixture: ComponentFixture<ProfilemanageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilemanageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfilemanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
