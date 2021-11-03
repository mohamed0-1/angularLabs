import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqObjectsComponent } from './req-objects.component';

describe('ReqObjectsComponent', () => {
  let component: ReqObjectsComponent;
  let fixture: ComponentFixture<ReqObjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReqObjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReqObjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
