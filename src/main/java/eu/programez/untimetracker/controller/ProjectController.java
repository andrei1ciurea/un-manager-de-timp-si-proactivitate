package eu.programez.untimetracker.controller;

import java.util.ArrayList;
import java.util.List;
import eu.programez.untimetracker.model.Project;
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
@RequestMapping(value = "/projects")
public class ProjectController {

    private List<Project> projects = new ArrayList<>();

    ProjectController() {
        this.projects = buildProjects();
    }

    @GetMapping
    public List<Project> getProjects() {
        return this.projects;
    }

    @GetMapping(value = "/{id}")
    public Project getProject(@PathVariable("id") Long id) {
        return this.projects.stream().filter(project -> project.getId() == id).findFirst().orElse(null);
    }

    @PostMapping
    public Project saveProject(@RequestBody Project project) {
        Long nextId = 0L;
        if (this.projects.size() != 0) {
            Project lastProject = this.projects.stream().skip(this.projects.size() - 1).findFirst().orElse(null);
            nextId = lastProject.getId() + 1;
        }
        project.setId(nextId);
        this.projects.add(project);
        return project;
    }

    @PutMapping
    public Project updateProject(@RequestBody Project project) {
        Project modifiedProject = this.projects.stream().filter(p -> p.getId() == project.getId()).findFirst().orElse(null);
        modifiedProject.setTitle(project.getTitle());
        modifiedProject.setDifficulty(project.getDifficulty());
        modifiedProject.setPriority(project.getPriority());
        return modifiedProject;
    }

    @DeleteMapping(value = "/{id}")
    public boolean deleteProject(@PathVariable("id") Long id) {
        Project deleteProject = this.projects.stream().filter(p -> p.getId() == id).findFirst().orElse(null);
        if (deleteProject != null) {
            this.projects.remove(deleteProject);
            return true;
        } else {
            return false;
        }
    }

    List<Project> buildProjects() {
        List<Project> projects = new ArrayList<>();

        Project project1 = buildProject(0L, "Piano", Priority.NOW, Difficulty.EZ);
        Project project2 = buildProject(1L, "Guitar", Priority.HIGH, Difficulty.EZ);

        projects.add(project1);
        projects.add(project2);

        return projects;

    }

    Project buildProject(Long id, String title, Priority priority, Difficulty difficulty) {
        Project project = new Project();
        project.setId(id);
        project.setTitle(title);
        project.setPriority(priority);
        project.setDifficulty(difficulty);
        return project;
    }


}
