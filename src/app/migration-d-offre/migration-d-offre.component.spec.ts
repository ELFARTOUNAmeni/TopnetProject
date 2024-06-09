import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MIGRATIONDOFFREComponent } from './migration-d-offre.component';

describe('MIGRATIONDOFFREComponent', () => {
  let component: MIGRATIONDOFFREComponent;
  let fixture: ComponentFixture<MIGRATIONDOFFREComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MIGRATIONDOFFREComponent]
    });
    fixture = TestBed.createComponent(MIGRATIONDOFFREComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
