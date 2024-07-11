import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { AlliesSectionComponent } from '../../components/allies-section/allies-section.component';
import { BuscadorComponent } from '../../components/buscador/buscador.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent, NavbarComponent, SidebarComponent, AlliesSectionComponent, BuscadorComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  currentIndex:number = 0;

  // showNextImage() {
  //   const carouselImages: HTMLDivElement | null = document.querySelector('.carousel-images');
  //   const images = document.querySelectorAll('.carousel-images img');
  //   this.currentIndex = (this.currentIndex + 1) % images.length;
  //   const offset = -this.currentIndex * images[0].clientWidth;
  //   carouselImages!.style.transform = `translateX(${offset}px)`;
}

// const component = new HomeComponent

// setInterval(component.showNextImage, 3000); // Cambia la imagen cada 3 segundos
