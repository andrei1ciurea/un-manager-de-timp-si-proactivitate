import {Component, OnInit} from '@angular/core';
import {ProjectService} from "../project.service";
import {Project} from "../Project";
import {Router} from "@angular/router";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
  providers: [ProjectService]
})
export class ProjectListComponent implements OnInit {

  private projects: Project[];


  constructor(private router: Router,
              private projectService: ProjectService) {
  }

  ngOnInit() {
    this.getAllProjects();
  }

  getAllProjects() {
    this.projectService.findAll().subscribe(
      projects => {
        this.projects = projects;
      },
      err => {
        console.log(err);
      }
    )
  }

  redirectNewProjectPage() {
    this.router.navigate(['project/create'])
  }

  editProjectPage(project: Project) {
    if (project) {
      this.router.navigate(['/project/edit', project.id]);
    }
  }

  deleteProject(project: Project) {
    if (project) {
      this.projectService.deleteProjectById(project.id).subscribe(
        res => {
          this.getAllProjects();
          this.router.navigate(['/projects']);
          console.log('done');
        }
      );
    }
  }

}
