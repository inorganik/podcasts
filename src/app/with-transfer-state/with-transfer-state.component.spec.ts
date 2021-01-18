import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithTransferStateComponent } from './with-transfer-state.component';

describe('WithTransferStateComponent', () => {
  let component: WithTransferStateComponent;
  let fixture: ComponentFixture<WithTransferStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithTransferStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithTransferStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
