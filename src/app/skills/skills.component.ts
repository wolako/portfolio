import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills = [
    {
      category: 'Administration Système',
      icon: 'dns',
      items: ['Linux (Debian, Ubuntu, RedHat)', 'Windows Server 2019', 'Ansible', 'Docker', 'Kubernetes']
    },
    {
      category: 'Réseaux informatique',
      icon: 'router',
      items: ['Cisco CCNA/CCNP', 'BGP', 'OPNsense', 'VLANs', 'Sécurité réseau']
    },
    {
      category: 'Développement Web',
      icon: 'code',
      items: ['Angular', 'Node.js/Express', 'HTML/CSS', 'JavaScript/Typescript', 'Git/Github']
    },
    {
      category: 'Virtualisation',
      icon: 'cloud',
      items: ['Proxmox', 'VMware ESXi', 'VirtualBox','Conteneurisation']
    },
    {
      category: 'Base de Données',
      icon: 'storage',
      items: ['MySQL', 'MariaDB', 'PostgreSQL']
    },
    {
      category: 'Monitoring',
      icon: 'monitor_heart',
      items: ['Grafana', 'UNMS', 'Cacti']
    }
  ];
}
