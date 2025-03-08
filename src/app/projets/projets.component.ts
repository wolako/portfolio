import { Component } from '@angular/core';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.scss']
})
export class ProjetsComponent {
  projects = [
    {
      title: 'Supervision réseau',
      technologies: ['Grafana', 'Cacti'],
      type: 'DevOps'
    },
    {
      title: 'Configuration de pare-feu',
      technologies: ['OPNsense', 'IDS/IPS', 'VPN'],
      type: 'Réseau'
    },
    {
      title: 'Applications Web',
      technologies: ['Angular', 'Express.js', 'MySQL'],
      type: 'Développement',
      links: [
        { name: 'DowoTech', url: 'https://dowotech.com' },
        { name: 'WocaDigital', url: 'https://www.wocadigital.com' }
      ]
    }
  ];
}