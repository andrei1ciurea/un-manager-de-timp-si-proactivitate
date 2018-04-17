package eu.programez.untimetracker.model;

import eu.programez.untimetracker.utils.Difficulty;
import eu.programez.untimetracker.utils.Priority;

public class Project {

    private Long id;
    private String title;
    private Priority priority;
    private Difficulty difficulty;
//    private ProjectType type;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Priority getPriority() {
        return priority;
    }

    public void setPriority(Priority priority) {
        this.priority = priority;
    }

    public Difficulty getDifficulty() {
        return difficulty;
    }

    public void setDifficulty(Difficulty difficulty) {
        this.difficulty = difficulty;
    }
}
