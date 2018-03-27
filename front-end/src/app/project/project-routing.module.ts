import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectListComponent} from "./project-list/project-list.component";
import {ProjectCreateComponent} from "./project-create/project-create.component";

const routes: Routes = [
  {path: '', redirectTo: 'projects', pathMatch: 'full'},
  {path: 'projects', component: ProjectListComponent},
  {path: 'project/create', component: ProjectCreateComponent},
  {path: 'project/edit/:id', component: ProjectCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
