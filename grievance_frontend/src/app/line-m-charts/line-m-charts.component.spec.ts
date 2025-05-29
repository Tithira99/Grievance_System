import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineMChartsComponent } from './line-m-charts.component';

describe('LineMChartsComponent', () => {
  let component: LineMChartsComponent;
  let fixture: ComponentFixture<LineMChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineMChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineMChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
