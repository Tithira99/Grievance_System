import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgmListComponent } from './agm-list.component';

describe('AgmListComponent', () => {
  let component: AgmListComponent;
  let fixture: ComponentFixture<AgmListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgmListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgmListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
