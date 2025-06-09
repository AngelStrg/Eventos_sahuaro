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

  correoElectronico: string = '';

  buscarReserva(): void {
    if (!this.correoElectronico || !this.correoElectronico.includes('@')) {
      alert('Por favor, ingresa un correo electrónico válido.');
      return;
    }

    // Aquí puedes hacer la llamada al servicio de búsqueda
    console.log('Buscando reserva para:', this.correoElectronico);

    // Ejemplo de redirección o búsqueda lógica
    // this.reservaService.buscarPorCorreo(this.correoElectronico).subscribe(...)
  }
}
