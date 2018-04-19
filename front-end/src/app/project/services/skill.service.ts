import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Skill} from "../model/Skill";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class SkillService {

  private apiUrl = 'http://localhost:8080/skills';

  constructor(private http: Http) { }

  findAll(): Observable<Skill[]>  {
    return this.http.get(this.apiUrl)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  findById(id: number): Observable<Skill> {
    return this.http.get(this.apiUrl + '/' + id)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Error'));
  }

  saveSkill(skill: Skill): Observable<Skill> {
    return this.http.post(this.apiUrl, skill)
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  deleteSkillById(id: number): Observable<boolean> {
    console.log(id);
    return this.http.delete(this.apiUrl + '/' + id)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  updateSkill(skill: Skill): Observable<Skill> {
    return this.http.put(this.apiUrl, skill)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
