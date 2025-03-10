import { ProjectsService } from '../_services/projects.service';
import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Component({
  selector: 'app-portfolio',
  standalone: false,
  
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit{

  projects = {} as Project[];

  isCollapsed: boolean = true;
  typescript: boolean = false;
  javascript: Boolean = false;
  python: Boolean = false;
  html: Boolean = false;
  java: Boolean = false;
  angular: boolean = false;
  nodejs: boolean = false;
  aspnet: boolean = false;
  react: boolean = false;
  filtering: boolean = false;

  constructor(private titleService : Title, private projectService: ProjectsService){
    this.titleService.setTitle('Portfolio');
  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }

  Filter(){
    let filterTags: Tag[] = [];

    if (this.typescript){
      filterTags.push(Tag.TYPESCRIPT)
    }
    if (this.angular){
      filterTags.push(Tag.ANGULAR)
    }
    if (this.python) {
      filterTags.push(Tag.PYTHON);
    }
    if (this.html) {
        filterTags.push(Tag.HTML);
    }
    if (this.java) {
        filterTags.push(Tag.JAVA);
    }
    if (this.nodejs) {
        filterTags.push(Tag.SQL);
    }
    if (this.aspnet) {
        filterTags.push(Tag.PHP);
    }
    if (this.javascript) {
        filterTags.push(Tag.JAVASCRIPT);
    }
    if (this.react) {
        filterTags.push(Tag.APIREST);
    }

    if (this.python || this.html || this.java || this.angular || this.typescript || this.nodejs || this.aspnet || this.javascript || this.react) {
      this.filtering = true;
    } else {
        this.filtering = false;
    }

    this.projects = this.projectService.GetProjectByFilter(filterTags);
  }

  ResetFilters(){
    this.typescript= false;
    this.javascript = false;
    this.python = false;
    this.html = false;
    this.java = false;
    this.angular = false;
    this.nodejs = false;
    this.aspnet = false;
    this.react = false;
    this.filtering = false;

    this.projects = this.projectService.GetProjects();
  }
}
