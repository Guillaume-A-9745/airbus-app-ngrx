import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparePartNavbarComponent } from './spare-part-navbar.component';

describe('SparePartNavbarComponent', () => {
  let component: SparePartNavbarComponent;
  let fixture: ComponentFixture<SparePartNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SparePartNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SparePartNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
