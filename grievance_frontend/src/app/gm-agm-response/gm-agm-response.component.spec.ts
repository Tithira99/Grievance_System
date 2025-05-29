import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GmAgmResponseComponent } from './gm-agm-response.component';

describe('GmAgmResponseComponent', () => {
  let component: GmAgmResponseComponent;
  let fixture: ComponentFixture<GmAgmResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GmAgmResponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GmAgmResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
