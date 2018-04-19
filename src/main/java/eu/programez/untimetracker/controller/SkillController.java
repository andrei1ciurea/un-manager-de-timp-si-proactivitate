package eu.programez.untimetracker.controller;

import java.util.ArrayList;
import java.util.List;
import eu.programez.untimetracker.model.Skill;
import eu.programez.untimetracker.utils.Difficulty;
import eu.programez.untimetracker.utils.Priority;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value = "/skills")
public class SkillController {

    private List<Skill> skills = new ArrayList<>();

    SkillController() {
        this.skills = buildSkills();
    }

    @GetMapping
    public List<Skill> getSkills() {
        return this.skills;
    }

    @GetMapping(value = "/{id}")
    public Skill getSkill(@PathVariable("id") Long id) {
        return this.skills.stream().filter(skill -> skill.getId() == id).findFirst().orElse(null);
    }

    @PostMapping
    public Skill saveSkill(@RequestBody Skill skill) {
        Long nextId = 0L;
        if (this.skills.size() != 0) {
            Skill lastSkill = this.skills.stream().skip(this.skills.size() - 1).findFirst().orElse(null);
            nextId = lastSkill.getId() + 1;
        }
        skill.setId(nextId);
        this.skills.add(skill);
        return skill;
    }

    @PutMapping
    public Skill updateSkill(@RequestBody Skill skill) {
        Skill modifiedSkill = this.skills.stream().filter(p -> p.getId() == skill.getId()).findFirst().orElse(null);
        modifiedSkill.setTitle(skill.getTitle());

        return modifiedSkill;
    }

    @DeleteMapping(value = "/{id}")
    public boolean deleteSkill(@PathVariable("id") Long id) {
        Skill deleteSkill = this.skills.stream().filter(p -> p.getId() == id).findFirst().orElse(null);
        if (deleteSkill != null) {
            this.skills.remove(deleteSkill);
            return true;
        } else {
            return false;
        }
    }

    List<Skill> buildSkills() {
        List<Skill> skills = new ArrayList<>();

        Skill skill1 = buildSkill(0L, "Consciousness","https://www.consciousreminder.com/wp-content/uploads/2017/12/Sat-Narayan-and-the-Sweetness-of-Self.jpg");
        Skill skill2 = buildSkill(1L, "Creativity","http://static.adweek.com/adweek.com-prod/wp-content/uploads/2017/07/LeftBrainRightBrain.jpg");

        skills.add(skill1);
        skills.add(skill2);

        return skills;

    }

    Skill buildSkill(Long id, String title, String imgPath) {
        Skill skill = new Skill();
        skill.setId(id);
        skill.setTitle(title);
        skill.setImgPath(imgPath);

        return skill;
    }


}
