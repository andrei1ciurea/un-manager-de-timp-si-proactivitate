import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectListComponent} from "./components/project-list/project-list.component";
import {ProjectCreateComponent} from "./components/project-create/project-create.component";
import {SkillListComponent} from './components/skill-list/skill-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'projects', pathMatch: 'full'},
  {path: 'projects', component: ProjectListComponent},
  {path: 'project/create', component: ProjectCreateComponent},
  {path: 'project/edit/:id', component: ProjectCreateComponent},
  {path: 'skills', component: SkillListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
