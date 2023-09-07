import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalGuardianComponent } from './legal-guardian.component';

describe('LegalGuardianComponent', () => {
  let component: LegalGuardianComponent;
  let fixture: ComponentFixture<LegalGuardianComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LegalGuardianComponent]
    });
    fixture = TestBed.createComponent(LegalGuardianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
