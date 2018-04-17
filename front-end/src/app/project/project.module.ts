import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectCreateComponent } from './components/project-create/project-create.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SkillListComponent } from './components/skill-list/skill-list.component';
import { SkillCreateComponent } from './components/skill-create/skill-create.component';

@NgModule({
  imports: [
    CommonModule,
    ProjectRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ProjectListComponent, ProjectCreateComponent, SkillListComponent, SkillCreateComponent]
})
export class ProjectModule { }
