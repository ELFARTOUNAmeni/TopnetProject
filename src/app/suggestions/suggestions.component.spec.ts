import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SUGGESTIONSComponent } from './suggestions.component';

describe('SUGGESTIONSComponent', () => {
  let component: SUGGESTIONSComponent;
  let fixture: ComponentFixture<SUGGESTIONSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SUGGESTIONSComponent]
    });
    fixture = TestBed.createComponent(SUGGESTIONSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
