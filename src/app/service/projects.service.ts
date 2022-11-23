import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Projects } from '../model/projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  URL = 'https://amarokbck2.herokuapp.com/projects/';


  constructor(private httpClient: HttpClient) { }

  
public getProjects(): Observable<Projects[]> {
  return this.httpClient.get<Projects[]>(`${this.URL}lista`);
}

public getProject(id: number): Observable<Projects> {
  return this.httpClient.get<Projects>(this.URL + `detail/${id}`);
}

public saveProjects(projects: Projects): Observable<any> {
  return this.httpClient.post<any>(this.URL + 'create', projects);
}

public updateProjects(id: number, projects: Projects): Observable<any> {
  return this.httpClient.put<any>(this.URL + `update/${id}`, projects);
}

public deleteProjects(id: number): Observable<any> {
  return this.httpClient.delete<any>(this.URL + `delete/${id}`);
}
}
