export class Project {

  id: number;
  title: string;
  priority: string;
  difficulty: string;

  constructor(id: number, title: string, priority: string, difficulty: string) {
    this.id = id;
    this.title = title;
    this.priority = priority;
    this.difficulty = difficulty

  }
}
