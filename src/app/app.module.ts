import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from './components/shared/navigation/navigation.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { ProjectCardSmallComponent } from './components/project/project-card-small/project-card-small.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { FilterPipe } from '../shared/filter.pipe';
import { FormsModule } from '@angular/forms';
import { CampaignCardComponent } from './components/campaigns-page/campaign-card/campaign-card.component';
import { CampaignsPageComponent } from './components/campaigns-page/campaigns-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavigationComponent,
    HeaderComponent,
    ProjectCardSmallComponent,
    FooterComponent,
    FilterPipe,
    CampaignsPageComponent,
    CampaignCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
