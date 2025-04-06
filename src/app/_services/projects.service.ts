import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {id: 0, name: "Skill and Mission Management Web App", pictures: ["web1.png","web2.png","web3.png"], projectLink: "https://github.com/Sdoufa26/ProjetWebFinal", summary: "Full-stack app using Angular, MySQL, and Node.js/Express.", description: "Development of a web application using Angular, MySQL, and Node.js/Express. The project includes a REST API for managing personnel skills and missions, along with a semi-automatic recommendation system. Clear documentation and Git are used for project tracking.", tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.APIREST, Tag.Nodejs, Tag.SQL]},
    {id: 2, name: "Software project", pictures: ["logiciel1.png","logiciel2.png","logiciel3.png"], projectLink: "//github.com/amassir/Projetlogicielbd", summary: "Innovative Full-Stack application to monitor elderly people.", description: "This project proposes an innovative web application dedicated to the monitoring of elderly people. It offers a dynamic and intuitive user interface, developed with HTML, CSS and JavaScript to ensure a smooth and user-friendly experience. The application integrates the Domoticz platform, allowing the remote management and control of home automation devices, while relying on an optimized database to ensure reliable and secure information management.", tags: [Tag.HTML, Tag.JAVASCRIPT, Tag.PHP, Tag.SQL]},
    {id: 5, name: "To-Do-List for task management", pictures: ["todolist.png"], projectLink: "https://github.com/amassir/TodoList", summary: "Interactive To-Do List application using JavaScript, HTML, and CSS.", description: "This project involves creating an interactive To-Do List application using JavaScript, HTML, and CSS. It features task management with categorization, deadline tracking, and notifications for efficient daily planning. The app is designed to be responsive and can be enhanced with backend technologies like Node.js and MongoDB for data storage.", tags: [Tag.HTML, Tag.JAVASCRIPT]},
    {id: 4, name: "Chess game", pictures: ["chess1.png"], projectLink: "https://github.com/amassir/Chess-game", summary: "chess game developed in Java", description: "This project involves developing a local chess game in Java with a command-line interface, allowing two players to compete on the same machine. The game handles all interactions via the terminal, offering a simple and efficient multiplayer experience.", tags: [Tag.JAVA]},
    {id: 3, name: "Minesweeper game", pictures: ["mines1.jpeg"], projectLink: "https://github.com/amassir/minesweeper", summary: "Minesweeper game developed in Python", description: "This project is a classic implementation of the Minesweeper game using Python and a graphical interface with Tkinter. It offers features like customizable grid sizes, mine generation, and a user-friendly interface for interacting with the board. The logic handles win/lose conditions and ensures a fair first click. Ideal for improving understanding of GUI development and game logic in Python.",tags: [Tag.PYTHON]},
  ]

  constructor() { }

  GetProjects(){
    return this.projects;
  }

  GetProjectById(id: number): Project {
    let project = this.projects.find(project => project.id === id);

    if (project === undefined){
      throw new TypeError('There is no project that matches the id' + id);
    }

    return project;
  }

  GetProjectByFilter(filterTags: Tag[]){
    let filteredProjects: Project[] = [];

    this.projects.forEach(function(project){
      let foundAll = true;

      filterTags.forEach(function (filterTag){
        if (project.tags.includes(filterTag) == false){
          foundAll = false;
        }
      });

      if(foundAll){
        filteredProjects.push(project)
      }
    });
    return filteredProjects;
  }
}
