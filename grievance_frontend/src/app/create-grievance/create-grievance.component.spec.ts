import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGrievanceComponent } from './create-grievance.component';

describe('CreateGrievanceComponent', () => {
  let component: CreateGrievanceComponent;
  let fixture: ComponentFixture<CreateGrievanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateGrievanceComponent]
      
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGrievanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
