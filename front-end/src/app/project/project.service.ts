import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Project} from "./Project";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class ProjectService {

  private apiUrl = 'http://localhost:8080/projects';

  constructor(private http: Http) { }

  findAll(): Observable<Project[]>  {
    return this.http.get(this.apiUrl)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  findById(id: number): Observable<Project> {
    return this.http.get(this.apiUrl + '/' + id)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Error'));
  }

  saveProject(project: Project): Observable<Project> {
    return this.http.post(this.apiUrl, project)
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  deleteProjectById(id: number): Observable<boolean> {
    console.log(id);
    return this.http.delete(this.apiUrl + '/' + id)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  updateProject(project: Project): Observable<Project> {
    return this.http.put(this.apiUrl, project)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
