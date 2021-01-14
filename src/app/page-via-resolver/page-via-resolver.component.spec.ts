import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageViaResolverComponent } from './page-via-resolver.component';

describe('PageViaResolverComponent', () => {
  let component: PageViaResolverComponent;
  let fixture: ComponentFixture<PageViaResolverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageViaResolverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageViaResolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
