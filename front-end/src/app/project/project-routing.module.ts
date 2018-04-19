import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectListComponent} from "./components/project-list/project-list.component";
import {ProjectCreateComponent} from "./components/project-create/project-create.component";
import {SkillListComponent} from './components/skill-list/skill-list.component';
import {MainPageComponent} from "../pages/main-page/main-page.component";

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: MainPageComponent},
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
