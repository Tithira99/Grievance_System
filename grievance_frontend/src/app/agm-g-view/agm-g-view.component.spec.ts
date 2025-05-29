import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgmGViewComponent } from './agm-g-view.component';

describe('AgmGViewComponent', () => {
  let component: AgmGViewComponent;
  let fixture: ComponentFixture<AgmGViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgmGViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgmGViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
