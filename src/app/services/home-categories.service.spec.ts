import { TestBed } from '@angular/core/testing';

import { HomeCategoriesService } from './home-categories.service';

describe('HomeCategoriesService', () => {
  let service: HomeCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
