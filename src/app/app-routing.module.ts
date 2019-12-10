import { CampaignDetailsComponent } from './components/campaign-details/campaign-details.component';
import { CampaignsPageComponent } from './components/campaigns-page/campaigns-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'campaigns', component: CampaignsPageComponent},
  {path: 'campaign/:campaignId', component: CampaignDetailsComponent},
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
