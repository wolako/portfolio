import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  navLinks = [
    { path: '/competences', label: 'Compétences', icon: 'code' },
    { path: '/experience', label: 'Expérience', icon: 'work' },
    { path: '/projets', label: 'Projets', icon: 'folder' },
    { path: '/formation', label: 'Formation', icon: 'school' },
    // { path: '/contact', label: 'Contact', icon: 'mail' }
  ];
}
