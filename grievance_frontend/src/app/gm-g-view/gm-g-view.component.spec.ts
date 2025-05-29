import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GmGViewComponent } from './gm-g-view.component';

describe('GmGViewComponent', () => {
  let component: GmGViewComponent;
  let fixture: ComponentFixture<GmGViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GmGViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GmGViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
