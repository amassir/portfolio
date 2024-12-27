import { ProjectsService } from '../_services/projects.service';
import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import { Project } from '../_models/Project';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  featuredProject = {} as Project;

  constructor(private titleService : Title, private projectService: ProjectsService){
    this.titleService.setTitle('Abdellah Massir - Home');
  }

  ngOnInit(): void {
    this.featuredProject = this.projectService.GetProjectById(0);
  }

}
