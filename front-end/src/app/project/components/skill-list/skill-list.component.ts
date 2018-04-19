import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Skill} from "../../model/Skill";
import {SkillService} from "../../services/skill.service";

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.css'],
  providers: [SkillService]
})
export class SkillListComponent implements OnInit {

  private skills: Skill[];
  private skillDefault: Skill;

  constructor(private router: Router,
              private skillService: SkillService) {
  }

  ngOnInit() {
    this.skillDefault = new Skill(3579, "Create New Skill", "https://cdn3.iconfinder.com/data/icons/glypho-generic-icons/64/plus-big-512.png", []);
    this.getAllSkills();
  }

  getAllSkills() {
    this.skillService.findAll().subscribe(
      skills => {
        this.skills = skills;
      },
      err => {
        console.log(err);
      }
    )
  }

  redirectNewSkillPage() {
    this.router.navigate(['skill/create'])
  }

  editSkillPage(skill: Skill) {
    if (skill) {
      this.router.navigate(['/skill/edit', skill.id]);
    }
  }

  deleteSkill(skill: Skill) {
    if (skill) {
      this.skillService.deleteSkillById(skill.id).subscribe(
        res => {
          this.getAllSkills();
          this.router.navigate(['/skills']);
          console.log('done');
        }
      );
    }
  }

}
