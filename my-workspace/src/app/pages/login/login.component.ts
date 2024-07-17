import { Component, Inject, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {
    this.setupEventListeners();
  }

  private setupEventListeners() {
    const emailInput = this.document.querySelector('#signup-email') as HTMLInputElement;
    const passwordInput = this.document.querySelector('#signup-password') as HTMLInputElement;
    const continueButton = this.document.querySelector('#signup button');
    const googleButton = this.document.querySelector('.google-btn');

    if (continueButton) {
      continueButton.addEventListener('click', (e) => {
        e.preventDefault();
        // Your existing logic for continue button
      });
    }

    if (googleButton) {
      googleButton.addEventListener('click', (e) => {
        e.preventDefault();
        // Your existing logic for Google button
      });
    }
  }

  private validateEmail(email: string): boolean {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  redirectToHome() {
    window.location.href = 'Inicio.html';
  }
}
