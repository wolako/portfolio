import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences = [
    {
      period: 'fevrier 2022 - mars 2024',
      position: 'Administrateur systèmes et réseaux',
      company: 'CAMINFO',
      tasks: [
        'Installation, configuration et maintenance des serveurs',
        'Maintien en condition opérationnelle de l’infrastructure des clients',
        'Gestion des réseaux informatiques et équipements réseau',
        'Administration des serveurs (Windows Server 2019, Debian, Ubuntu, RedHat)',
        'Gestion de la ferme Active directory, GPO, DHCP, DNS',
        'Configuration des redondances entre les serveurs pour la haute disponibilité',
        'Virtualisation des serveurs avec proxmox, Virtualbox et VMware ESXI des clients',
        'Assistance et support aux utilisateurs niveau 1 et 2',
      ]
    },
    {
      period: 'mars 2021 - décembre 2021',
      position: 'Technicien Support',
      company: 'CAFE Informatique & Télécommunication',
      tasks: [
        'Effectuer les premiers dépannages tout en maintenant la maîtrise et un contrôle optimal du réseau C@fenet',
        'Monitorer le backbone de l’entreprise',
        'Configuration et maintenance des équipements réseaux (Routeurs, Switch, Serveur)',
        'Fournir une assistance par téléphone aux clients pour résoudre leurs problèmes',
        'Fournir une assistance par téléphone aux techniciens pendant leurs interventions sur le terrain'
      ]
    },
    {
      period: 'mars 2017 - mais 2017',
      position: 'Technicien Réseau',
      company: 'ONG CARREFOUR TIERS MONDE',
      tasks: [
        'Cablage et configuration des équipements réseaux (Routeur, Switch, serveur)',
        'Mise en place des protocoles de sécurité (ssh, firewall, iptables)',
        'Configurer le serveur web (Apache, Nginx)',
        'Former les apprenants aux outils informatiques et à Microsoft Office'
      ]
    },
  ];
}
