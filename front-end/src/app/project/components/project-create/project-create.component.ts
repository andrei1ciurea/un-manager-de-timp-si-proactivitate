import {Component, OnDestroy, OnInit} from '@angular/core';
import {Project} from "../../model/Project";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProjectService} from "../../services/project/project.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css'],
  providers: [ProjectService]
})
export class ProjectCreateComponent implements OnInit, OnDestroy {

  defaultPriorities: any[] = [
    {id: 0, name: 'NONE'},
    {id: 1, name: 'LOW'},
    {id: 2, name: 'MEDIUM'},
    {id: 3, name: 'HIGH'},
    {id: 4, name: 'NOW'},
  ];

  id: number;
  project: Project;

  projectForm: FormGroup;
  private sub: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private projectService: ProjectService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.projectForm = new FormGroup({
      title: new FormControl('', Validators.required),
      priority: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required)
    });

    if (this.id) { //edit form
      this.projectService.findById(this.id).subscribe(
        project => {
          this.id = project.id;
          this.projectForm.patchValue({
            title: project.title,
            priority: project.priority,
            content: project.difficulty
          });
        }, error => {
          console.log(error);
        }
      );

    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onSubmit() {
    if (this.projectForm.valid) {
      console.log(this);
      if (this.id || this.id == 0) {
        let project: Project = new Project(this.id,
          this.projectForm.controls['title'].value,
          this.projectForm.controls['priority'].value,
          this.projectForm.controls['content'].value);
        this.projectService.updateProject(project).subscribe();
      } else {

        let project: Project = new Project(null,
          this.projectForm.controls['title'].value,
          this.projectForm.controls['priority'].value,
          this.projectForm.controls['content'].value);
        this.projectService.saveProject(project).subscribe();
      }
      this.projectForm.reset();
      this.router.navigate(['/projects'])
    }
  }

  redirectProjectPage() {
    this.router.navigate(['projects']);
  }

}
