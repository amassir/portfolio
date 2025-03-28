import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'resume', component: ResumeComponent},
  {path: 'contact', component: ContactComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

