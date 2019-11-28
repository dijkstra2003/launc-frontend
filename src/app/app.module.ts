import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/shared/navigation/navigation.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectCardComponent } from './components/projects/project-card/project-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavigationComponent,
    HeaderComponent,
    ProjectsComponent,
    ProjectCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
