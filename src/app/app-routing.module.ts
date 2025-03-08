import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjetsComponent } from './projets/projets.component';
import { EducationComponent } from './education/education.component';
// import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'competences', component: SkillsComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'projets', component: ProjetsComponent },
  { path: 'formation', component: EducationComponent }
  // { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
