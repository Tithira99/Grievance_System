import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineManagerSolComponent } from './line-manager-sol.component';

describe('LineManagerSolComponent', () => {
  let component: LineManagerSolComponent;
  let fixture: ComponentFixture<LineManagerSolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineManagerSolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineManagerSolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
