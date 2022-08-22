import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import {HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ErrorComponent } from './components/error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    FooterComponent,
    NavbarComponent,
    BannerComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({"backgroundGradient": true,
    "backgroundColor": "#0d84bf",
    "backgroundGradientStopColor": "#000000",
    "backgroundOpacity": 0.2,
    "backgroundPadding": 4,
    "radius": 78,
    "maxPercent": 100,
    "unitsFontSize": "28",
    "unitsFontWeight": "900",
    "unitsColor": "#ffffff",
    "outerStrokeGradient": true,
    "outerStrokeWidth": 10,
    "outerStrokeColor": "#9b64dd",
    "outerStrokeGradientStopColor": "#00ff91",
    "innerStrokeColor": "#95bee4",
    "innerStrokeWidth": 0,
    "titleColor": "#ffffff",
    "titleFontSize": "29",
    "titleFontWeight": "900",
    "subtitleColor": "#ffffff",
    "subtitleFontSize": "14",
    "subtitleFontWeight": "900",
    "animationDuration": 3600,
    "showInnerStroke": false,
    "responsive": true,
    "startFromZero": false
  }),
     HttpClientModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
