import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { AlliesSectionComponent } from '../../components/allies-section/allies-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent, NavbarComponent, SidebarComponent, AlliesSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
