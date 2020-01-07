import { CampaignPageService } from './components/campaigns-page/campaign-page.service';
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
import { CampaignDetailsComponent } from './components/campaigns-page/campaign-details/campaign-details.component';
import { CreateCampaignComponent } from './components/campaigns-page/create-campaign/create-campaign.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { PaymentComponent } from './components/payment/payment.component';

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
    CampaignCardComponent,
    CampaignDetailsComponent,
    CreateCampaignComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [
    HttpClientModule,
    CampaignPageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
