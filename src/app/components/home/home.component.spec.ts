import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { HeaderComponent } from '../shared/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FilterPipe } from '../../../shared/filter.pipe';
import { FooterComponent } from '../shared/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ProjectCardSmallComponent } from '../project/project-card-small/project-card-small.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FontAwesomeModule,
        FormsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        ProjectCardSmallComponent,
        FilterPipe
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
