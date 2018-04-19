import {Project} from "./Project";

export class Skill {

  id: number;
  title: string;
  imgPath: string;
  projectList: Project[];


  constructor(id: number, title: string, imgPath: string, projectList: Project[]) {
    this.id = id;
    this.title = title;
    this.imgPath = imgPath;
    this.projectList = projectList;
  }
}
