import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalGuardianFormComponent } from './legal-guardian-form.component';

describe('LegalGuardianFormComponent', () => {
  let component: LegalGuardianFormComponent;
  let fixture: ComponentFixture<LegalGuardianFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LegalGuardianFormComponent]
    });
    fixture = TestBed.createComponent(LegalGuardianFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
