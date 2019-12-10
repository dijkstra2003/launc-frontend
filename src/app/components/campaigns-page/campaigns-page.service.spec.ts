import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async } from '@angular/core/testing';
import { CampaignsPageService } from './campaigns-page.service';

describe('CampaignsPageService', () => {
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
    const service: CampaignsPageService = TestBed.get(CampaignsPageService);
    expect(service).toBeTruthy();
  });
});
