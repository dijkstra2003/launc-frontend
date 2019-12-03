import { TestBed } from '@angular/core/testing';

import { CampaignPageService } from './campaign-page.service';

describe('CampaignPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CampaignPageService = TestBed.get(CampaignPageService);
    expect(service).toBeTruthy();
  });
});
