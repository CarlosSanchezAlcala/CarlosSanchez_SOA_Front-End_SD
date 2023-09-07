import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInactiveComponent } from './list-inactive.component';

describe('ListInactiveComponent', () => {
  let component: ListInactiveComponent;
  let fixture: ComponentFixture<ListInactiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListInactiveComponent]
    });
    fixture = TestBed.createComponent(ListInactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
