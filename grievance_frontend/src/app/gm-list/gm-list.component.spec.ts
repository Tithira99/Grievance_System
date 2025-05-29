import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GmListComponent } from './gm-list.component';

describe('GmListComponent', () => {
  let component: GmListComponent;
  let fixture: ComponentFixture<GmListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GmListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GmListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
