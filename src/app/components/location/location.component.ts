import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { BaseServiceComponent } from '../base-service/base-service.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
  standalone: true,
  imports: [CommonModule, RouterLink, NavBarComponent, FooterComponent],
})
export class LocationComponent implements AfterViewInit {
  @ViewChild('baseServiceRef') baseServiceComponent!: BaseServiceComponent;

  ngAfterViewInit() {
    // Aquí ya puedes acceder a las propiedades o métodos de BaseServiceComponent
    console.log(this.baseServiceComponent);
  }
}

