import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CampaignCardComponent } from './campaign-card.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CampaignsPageComponent } from '../campaigns-page.component';

describe('CampaignCardComponent', () => {
  let component: CampaignCardComponent;
  let fixture: ComponentFixture<CampaignCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ CampaignCardComponent, CampaignsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
