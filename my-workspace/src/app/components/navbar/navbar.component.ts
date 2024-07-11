import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  menu: HTMLDivElement | null = document.querySelector('.sidebar');

  openNav() {
    this.menu!.style.left = '0px';
}
}
