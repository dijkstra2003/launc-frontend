import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async } from '@angular/core/testing';
import { CampaignPageService } from './campaign-page.service';

describe('CampaignPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [
      ]
    })
    .compileComponents();
  }));

  it('should be created', () => {
    const service: CampaignPageService = TestBed.get(CampaignPageService);
    expect(service).toBeTruthy();
  });
});
