import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GmAddSolComponent } from './gm-add-sol.component';

describe('GmAddSolComponent', () => {
  let component: GmAddSolComponent;
  let fixture: ComponentFixture<GmAddSolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GmAddSolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GmAddSolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
