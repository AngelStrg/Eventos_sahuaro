import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-search-reservation',
  imports: [CommonModule, NavBarComponent, FooterComponent, RouterModule],
  templateUrl: './search-reservation.component.html',
  styleUrl: './search-reservation.component.css'
})
export class SearchReservationComponent {
}
