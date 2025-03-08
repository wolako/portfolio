import { Component, Pipe, PipeTransform } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';
import { filter } from 'rxjs/operators';

@Pipe({ name: 'filterNonHome' })
export class FilterNonHomePipe implements PipeTransform {
  transform(links: any[]): any[] {
    return links.filter(link => link.path !== '/');
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [FilterNonHomePipe]
})
export class AppComponent {
  // title = 'portfolio';
  showNavigation = false;
  isMobileMenuOpen = false;
  navLinks = [
    { path: '/competences', label: 'Compétences', icon: 'code' },
    { path: '/experience', label: 'Expérience', icon: 'work' },
    { path: '/projets', label: 'Projets', icon: 'folder' },
    { path: '/formation', label: 'Formation', icon: 'school' },
  ];

  constructor(private router: Router) {
    this.router.events
      .pipe(
        filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        this.showNavigation = event.urlAfterRedirects !== '/';
        this.closeMobileMenu();
      });
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}
