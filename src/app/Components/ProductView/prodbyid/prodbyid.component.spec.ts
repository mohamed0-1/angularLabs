import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdbyidComponent } from './prodbyid.component';

describe('ProdbyidComponent', () => {
  let component: ProdbyidComponent;
  let fixture: ComponentFixture<ProdbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdbyidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
