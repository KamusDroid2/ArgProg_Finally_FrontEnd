import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EditeducationComponent } from './components/education/editeducation.component';
import { NeweducationComponent } from './components/education/neweducation.component';
import { NewexperienciaComponent } from './components/experiencia/newexperiencia.component';
import { EditexperienciaComponent } from './components/experiencia/editexperiencia.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'login', component: LoginComponent},
  {path:'education', component: EducationComponent},
  {path:'experiencia', component: ExperienciaComponent},
  {path:'projects', component: ProjectsComponent},
  {path:'nuevaedu', component: NeweducationComponent},
  {path:'editedu/:id', component: EditeducationComponent},
  {path:'nuevaexp', component: NewexperienciaComponent},
  {path:'editexp/:id', component: EditexperienciaComponent},
];

export const RoutingProviders: any[] = [];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
