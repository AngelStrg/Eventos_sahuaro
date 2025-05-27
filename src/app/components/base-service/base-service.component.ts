import { Component } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { CarouselComponent } from "../carousel/carousel.component";
import { OurServiceComponent } from "../our-service/our-service.component";
import { FooterComponent } from "../footer/footer.component";
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-base-service',
  imports: [NavBarComponent, CarouselComponent, OurServiceComponent, FooterComponent],
  templateUrl: './base-service.component.html',
  styleUrl: './base-service.component.css'
})
export class BaseServiceComponent {

  constructor(private titleService: Title) {}

ngOnInit() {
  this.titleService.setTitle('Eventos Sahuaro');
}

}
