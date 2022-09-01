import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { EducationComponent } from './components/education/education.component';
import { ErrorComponent } from './components/error/error.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EditeducationComponent } from './components/education/editeducation.component';
import { NeweducationComponent } from './components/education/neweducation.component';
import { EditExperienceComponent } from './components/experience/edit-experience.component';
import { NewExperienceComponent } from './components/experience/new-experience.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'education', component: EducationComponent},
  {path:'projects', component: ProjectsComponent},
  {path:'about', component: AboutComponent},
  {path:'experience', component: ExperienceComponent},
  {path:'login', component: LoginComponent},

  {path: '**', component: ErrorComponent},
  {path: 'nuevaexp', component: NewExperienceComponent},
  {path: 'editexp/:id', component: EditExperienceComponent},
  {path: 'nuevaedu', component: NeweducationComponent},
  {path: 'editedu/:id', component: EditeducationComponent}
];
export const RoutingProviders: any[] = [];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
