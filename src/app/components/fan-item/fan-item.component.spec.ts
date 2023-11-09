import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FanItemComponent } from './fan-item.component';

describe('FanItemComponent', () => {
  let component: FanItemComponent;
  let fixture: ComponentFixture<FanItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FanItemComponent]
    });
    fixture = TestBed.createComponent(FanItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
