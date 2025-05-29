import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineMViewComponent } from './line-m-view.component';

describe('LineMViewComponent', () => {
  let component: LineMViewComponent;
  let fixture: ComponentFixture<LineMViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineMViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineMViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
