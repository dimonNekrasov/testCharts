import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManuallyEventComponent } from './manually-event.component';

describe('ManuallyEventComponent', () => {
  let component: ManuallyEventComponent;
  let fixture: ComponentFixture<ManuallyEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManuallyEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManuallyEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
