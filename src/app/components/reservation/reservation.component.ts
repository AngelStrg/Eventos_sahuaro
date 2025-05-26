import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [CommonModule, FormsModule, NavBarComponent],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css'
})
export class ReservationComponent {
  nombre: string = '';
  correo: string = '';
  telefono: string = '';
  fecha: string = '';
  personas: string = '';
  tipoEvento: string = '';
  alberca: string = '';
  horaInicio: string = '';
  horaFin: string = '';
  colorMantel: string = '#ff0000';
  extras: string[] = [];

  actualizarHoraFin() {
    if (!this.horaInicio) return;

    const [hora] = this.horaInicio.split(':').map(Number);
    const fecha = new Date();
    fecha.setHours(hora, 0, 0, 0); // Solo hora exacta

    // Sumar 6 horas exactas
    fecha.setHours(fecha.getHours() + 6);

    // Limitar a máximo 2:00 AM del siguiente día
    const ahora = new Date();
    if (fecha.getDate() !== ahora.getDate() && fecha.getHours() >= 2) {
      fecha.setHours(2, 0, 0, 0);
    }

    // Formato HH:00
    const horaFin = fecha.getHours().toString().padStart(2, '0');
    this.horaFin = `${horaFin}:00`;
  }

  toggleExtra(extra: string, event: any) {
    if (event.target.checked) {
      this.extras.push(extra);
    } else {
      this.extras = this.extras.filter(e => e !== extra);
    }
  }
}

