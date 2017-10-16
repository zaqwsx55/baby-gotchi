import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyComponentComponent } from './baby-component.component';

describe('BabyComponentComponent', () => {
  let component: BabyComponentComponent;
  let fixture: ComponentFixture<BabyComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BabyComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
