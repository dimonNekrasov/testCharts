import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomaticEventComponent } from './automatic-event.component';

describe('AutomaticEventComponent', () => {
  let component: AutomaticEventComponent;
  let fixture: ComponentFixture<AutomaticEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomaticEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomaticEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
