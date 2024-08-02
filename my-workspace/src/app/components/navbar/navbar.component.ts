import { Component, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { VerMasTardeComponent } from "../../../../main/my-workspace/src/app/components/ver-mas-tarde/ver-mas-tarde.component";
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule, VerMasTardeComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isSidebarVisible = false;
  isDarkMode: boolean = false;
  @Output() darkModeToggled = new EventEmitter<boolean>();

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    this.darkModeToggled.emit(this.isDarkMode);
    localStorage.setItem('darkMode', this.isDarkMode.toString());
  }

  openNav() {
    this.isSidebarVisible = true;
  }

  closeNav() {
    this.isSidebarVisible = false;
  }

  ngOnInit() {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
      this.isDarkMode = true;
      document.body.classList.add('dark-mode');
    }
  }

}
