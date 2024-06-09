import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RECLAMATIONSComponent } from './reclamations.component';

describe('RECLAMATIONSComponent', () => {
  let component: RECLAMATIONSComponent;
  let fixture: ComponentFixture<RECLAMATIONSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RECLAMATIONSComponent]
    });
    fixture = TestBed.createComponent(RECLAMATIONSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
