import { ProjectsService } from '../_services/projects.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Component({
  selector: 'app-portfolio',
  standalone: false,
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {

  projects = {} as Project[];

  isCollapsed: boolean = true;
  typescript: boolean = false;
  javascript: boolean = false;
  sql: boolean = false;
  html: boolean = false;
  java: boolean = false;
  angular: boolean = false;
  nodejs: boolean = false;
  php: boolean = false;
  apirest: boolean = false;

  // ✅ Nouveau filtre Python ajouté
  python: boolean = false;

  filtering: boolean = false;

  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Portfolio');
  }

  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }

  Filter() {
    let filterTags: Tag[] = [];

    if (this.typescript) {
      filterTags.push(Tag.TYPESCRIPT)
    }
    if (this.angular) {
      filterTags.push(Tag.ANGULAR)
    }
    if (this.sql) {
      filterTags.push(Tag.SQL);
    }
    if (this.html) {
      filterTags.push(Tag.HTML);
    }
    if (this.java) {
      filterTags.push(Tag.JAVA);
    }
    if (this.nodejs) {
      filterTags.push(Tag.Nodejs);
    }
    if (this.php) {
      filterTags.push(Tag.PHP);
    }
    if (this.javascript) {
      filterTags.push(Tag.JAVASCRIPT);
    }
    if (this.apirest) {
      filterTags.push(Tag.APIREST);
    }

    // ✅ Ajout du tag Python si coché
    if (this.python) {
      filterTags.push(Tag.PYTHON);
    }

    // ✅ Ajout de `this.python` à la condition de filtrage globale
    if (
      this.sql || this.html || this.java || this.angular ||
      this.typescript || this.nodejs || this.php ||
      this.javascript || this.apirest || this.python
    ) {
      this.filtering = true;
    } else {
      this.filtering = false;
    }

    this.projects = this.projectService.GetProjectByFilter(filterTags);
  }

  ResetFilters() {
    this.typescript = false;
    this.javascript = false;
    this.sql = false;
    this.html = false;
    this.java = false;
    this.angular = false;
    this.nodejs = false;
    this.php = false;
    this.apirest = false;

    // ✅ Reset du filtre Python ajouté ici
    this.python = false;

    this.filtering = false;
    this.projects = this.projectService.GetProjects();
  }
}
