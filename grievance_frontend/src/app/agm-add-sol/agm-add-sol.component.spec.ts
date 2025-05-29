import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgmAddSolComponent } from './agm-add-sol.component';

describe('AgmAddSolComponent', () => {
  let component: AgmAddSolComponent;
  let fixture: ComponentFixture<AgmAddSolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgmAddSolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgmAddSolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
