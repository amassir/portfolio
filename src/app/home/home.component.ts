import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../_models/Project';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  featuredProject = {} as Project;
  isBrowser: boolean;

  constructor(
    private titleService: Title,
    private projectService: ProjectsService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.titleService.setTitle('Abdellah Massir - Home');
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    this.featuredProject = this.projectService.GetProjectById(0);
  }

}