import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGrievanceComponent } from './update-grievance.component';

describe('UpdateGrievanceComponent', () => {
  let component: UpdateGrievanceComponent;
  let fixture: ComponentFixture<UpdateGrievanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateGrievanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateGrievanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
