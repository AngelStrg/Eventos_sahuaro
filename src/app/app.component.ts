import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { OurServiceComponent } from './components/our-service/our-service.component';

@Component({
  selector: 'app-root',
  imports: [NavBarComponent, FooterComponent, CarouselComponent, RouterOutlet, OurServiceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Eventos_Sahuaro';
}
