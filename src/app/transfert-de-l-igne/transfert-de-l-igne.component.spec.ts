import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TRANSFERTDELIGNEComponent } from './transfert-de-l-igne.component';

describe('TRANSFERTDELIGNEComponent', () => {
  let component: TRANSFERTDELIGNEComponent;
  let fixture: ComponentFixture<TRANSFERTDELIGNEComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TRANSFERTDELIGNEComponent]
    });
    fixture = TestBed.createComponent(TRANSFERTDELIGNEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
