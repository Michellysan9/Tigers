import { Component, OnInit } from '@angular/core';
import { SidebarServiceService } from '../../services/sidebar-service.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})

export class SidebarComponent implements OnInit {
  isOpen = false;

  constructor(private sidebarService: SidebarServiceService) {}

  ngOnInit() {
    this.sidebarService.isOpen$.subscribe(isOpen => {
      this.isOpen = isOpen;
      this.updateSidebarPosition();
    });
  }

  private updateSidebarPosition() {
    const sidebar = document.querySelector('.sidebar') as HTMLElement;
    if (sidebar) {
      sidebar.style.left = this.isOpen ? '0px' : '-250px';
    }
  }

  closeNav() {
    this.sidebarService.toggle();
  }
}