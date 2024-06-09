import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionEmailsComponent } from './gestion-emails.component';

describe('GestionEmailsComponent', () => {
  let component: GestionEmailsComponent;
  let fixture: ComponentFixture<GestionEmailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionEmailsComponent]
    });
    fixture = TestBed.createComponent(GestionEmailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
