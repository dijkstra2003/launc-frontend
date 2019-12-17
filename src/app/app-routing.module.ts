import { CampaignsPageComponent } from './components/campaigns-page/campaigns-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CampaignDetailsComponent } from './components/campaigns-page/campaign-details/campaign-details.component';
import { CreateCampaignComponent } from './components/campaigns-page/create-campaign/create-campaign.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'projects', component: CampaignsPageComponent},
  { path: 'campaign/by/:id', component: CampaignDetailsComponent},
  { path: 'campaign/create', component: CreateCampaignComponent},
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
