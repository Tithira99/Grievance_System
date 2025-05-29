import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGViewComponent } from './user-g-view.component';

describe('UserGViewComponent', () => {
  let component: UserGViewComponent;
  let fixture: ComponentFixture<UserGViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserGViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
