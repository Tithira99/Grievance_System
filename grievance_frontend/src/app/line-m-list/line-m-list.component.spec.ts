import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineMListComponent } from './line-m-list.component';

describe('LineMListComponent', () => {
  let component: LineMListComponent;
  let fixture: ComponentFixture<LineMListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineMListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineMListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
