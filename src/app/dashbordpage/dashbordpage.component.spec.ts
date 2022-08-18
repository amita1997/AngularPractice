import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordpageComponent } from './dashbordpage.component';

describe('DashbordpageComponent', () => {
  let component: DashbordpageComponent;
  let fixture: ComponentFixture<DashbordpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbordpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashbordpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
