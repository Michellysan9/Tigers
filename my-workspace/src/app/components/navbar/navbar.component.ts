import { Component, Inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SidebarServiceService } from '../../services/sidebar-service.service';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private sidebarService: SidebarServiceService) {}

  toggleSidebar() {
    this.sidebarService.toggle();
  }
}

