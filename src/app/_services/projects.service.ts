import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {id: 0, name: "Skill and Mission Management Web App", pictures: ["web1.png","web2.png","web3.png"], projectLink: "https://github.com/Sdoufa26/ProjetWebFinal", summary: "Full-stack app using Angular, MySQL, and Node.js/Express to manage personnel skills and missions.", description: "Development of a web application using Angular, MySQL, and Node.js/Express. The project includes a REST API for managing personnel skills and missions, along with a semi-automatic recommendation system. Clear documentation and Git are used for project tracking.", tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.APIREST, Tag.Nodejs]},
    {id: 1, name: "Pokemon management application", pictures: ["pokemon1.png","pokemon2.png","pokemon3.png"], projectLink: "https://github.com/amassir/playing-cards", summary: "Front-end application featuring a login system, developed with Angular, TypeScript, and REST API.", description: "A front-end Pokémon management application designed to allow users to efficiently manage their Pokémon collection. This application features a secure login system and is developed using Angular and TypeScript, ensuring a responsive and user-friendly interface. It integrates with a REST API, allowing seamless data interaction for tasks such as retrieving, adding, updating, and deleting Pokémon information.", tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.APIREST]},
    {id: 2, name: "Software project", pictures: ["logiciel1.png","logiciel2.png","logiciel3.png"], projectLink: "//github.com/amassir/Projetlogicielbd", summary: "Innovative Full-Stack application to monitor elderly people.", description: "This project proposes an innovative web application dedicated to the monitoring of elderly people. It offers a dynamic and intuitive user interface, developed with HTML, CSS and JavaScript to ensure a smooth and user-friendly experience. The application integrates the Domoticz platform, allowing the remote management and control of home automation devices, while relying on an optimized database to ensure reliable and secure information management.", tags: [Tag.HTML, Tag.JAVASCRIPT, Tag.PHP, Tag.SQL]},
    {id: 3, name: "Data Cleaning in SQL", pictures: ["sql1.png","sql2.png"], projectLink: "//github.com/amassir/data-cleaning-project", summary: "Capturing and cleaning raw data for future visualizations", description: "SQL project that improves data quality in a real estate database. It allows you to standardize dates, replace missing addresses with those from other associated records, and separate addresses into multiple parts (such as address, city, and state).", tags: [Tag.SQL]},
    {id: 4, name: "Chess game in java", pictures: ["chess1.png"], projectLink: "https://github.com/amassir/Chess-game", summary: "chess game developed in java", description: "This project involves developing a local chess game in Java with a command-line interface, allowing two players to compete on the same machine. The game handles all interactions via the terminal, offering a simple and efficient multiplayer experience.", tags: [Tag.JAVA]},
    {id: 5, name: "To-Do-List for task management", pictures: ["todolist.png"], projectLink: "https://github.com/amassir/TodoList", summary: "Interactive To-Do List application using JavaScript, HTML, and CSS.", description: "This project involves creating an interactive To-Do List application using JavaScript, HTML, and CSS. It features task management with categorization, deadline tracking, and notifications for efficient daily planning. The app is designed to be responsive and can be enhanced with backend technologies like Node.js and MongoDB for data storage.", tags: [Tag.HTML, Tag.JAVASCRIPT]},
  ];

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
