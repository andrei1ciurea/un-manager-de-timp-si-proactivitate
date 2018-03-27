export class Project {

  id: number;
  title: string;
  priority: string;
  content: string;

  constructor(id: number, title: string, priority: string, content: string) {
    this.id = id;
    this.title = title;
    this.priority = priority;
    this.content = content;

  }
}
