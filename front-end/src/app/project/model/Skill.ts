import {Project} from "./Project";

export class Skill {

  id: number;
  title: string;
  projectList: Project[];


  constructor(id: number, title: string, projectList: Project[]) {
    this.id = id;
    this.title = title;
    this.projectList = projectList;
  }
}
