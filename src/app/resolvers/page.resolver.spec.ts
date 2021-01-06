import { TestBed } from '@angular/core/testing';

import { PageResolver } from './page.resolver';

describe('PageResolver', () => {
  let resolver: PageResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PageResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
