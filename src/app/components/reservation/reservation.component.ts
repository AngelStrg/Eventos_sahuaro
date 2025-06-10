import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [CommonModule, FormsModule, NavBarComponent, FooterComponent, RouterModule, RouterLink],
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {
  nombre: string = '';
  apellidos: string = '';
  correo: string = '';
  telefono: string = '';
  fecha: string = '';
  personas: string = '';
  tipoEvento: string = '';
  alberca: string = '';
  horaInicio: string = '';
  horaFin: string = '';
  colorMantel: string = '#fff';
  extras: string[] = [];
  horasExtras: number = 0;
  aceptaTerminos = false;

  resumen: { label: string; valor: any }[] = [];

  horasDisponibles = [
    { value: '08:00 am', display: '08:00 am' },
    { value: '09:00 am', display: '09:00 am' },
    { value: '10:00 am', display: '10:00 am' },
    { value: '11:00 am', display: '11:00 am' },
    { value: '12:00 pm', display: '12:00 pm' },
    { value: '01:00 pm', display: '01:00 pm' },
    { value: '02:00 pm', display: '02:00 pm' },
    { value: '03:00 pm', display: '03:00 pm' },
    { value: '04:00 pm', display: '04:00 pm' },
    { value: '05:00 pm', display: '05:00 pm' },
    { value: '06:00 pm', display: '06:00 pm' },
    { value: '07:00 pm', display: '07:00 pm' },
    { value: '08:00 pm', display: '08:00 pm' }
  ];

  errorNombre = '';
  errorApellidos = '';
  errorCorreo = '';
  errorTelefono = '';
  errorFecha = '';
  errorPersonas = '';
  errorTipoEvento = '';
  errorAlberca = '';
  errorHoraInicio = '';
  mensajeGeneral = '';

  actualizarHoraFin() {
    if (!this.horaInicio) {
      this.horaFin = '';
      return;
    }

    const partes = this.horaInicio.split(':');
    let horaInicioNum = parseInt(partes[0], 10);
    const sufijo = this.horaInicio.includes('pm') ? 'pm' : 'am';

    if (sufijo === 'pm' && horaInicioNum !== 12) {
      horaInicioNum += 12;
    }
    if (sufijo === 'am' && horaInicioNum === 12) {
      horaInicioNum = 0;
    }

    let finNum = horaInicioNum + 6 + this.horasExtras;
    if (finNum > 26) finNum = 26;
    if (finNum >= 24) finNum = finNum - 24;

    this.horaFin = this.formatearHora12(finNum);
    this.actualizarResumen();
  }

  formatearHora12(hora24: number): string {
    let hora = hora24;
    let sufijo = 'am';

    if (hora === 0) {
      hora = 12;
    } else if (hora === 12) {
      sufijo = 'pm';
    } else if (hora > 12) {
      hora -= 12;
      sufijo = 'pm';
    }

    return `${hora.toString().padStart(2, '0')}:00 ${sufijo}`;
  }

  toggleExtra(extra: string, event: any) {
    if (event.target.checked) {
      this.extras.push(extra);
    } else {
      this.extras = this.extras.filter(e => e !== extra);
    }
    this.actualizarResumen();
  }

  validarTipoEvento() {
    this.mensajeGeneral =
      this.tipoEvento === 'XV Años'
        ? 'Por el tipo de evento XV Años, los precios pueden variar debido a contratación de seguridad.'
        : '';
    this.actualizarResumen();
  }

  obtenerHorasExtraDisponibles(): number[] {
    if (!this.horaInicio) return [0];

    const partes = this.horaInicio.split(':');
    let horaInicioNum = parseInt(partes[0], 10);
    const sufijo = this.horaInicio.includes('pm') ? 'pm' : 'am';

    if (sufijo === 'pm' && horaInicioNum !== 12) {
      horaInicioNum += 12;
    }
    if (sufijo === 'am' && horaInicioNum === 12) {
      horaInicioNum = 0;
    }

    const maxExtras = Math.max(0, 26 - (horaInicioNum + 6));
    return Array.from({ length: maxExtras + 1 }, (_, i) => i);
  }

  onHorasExtrasChange(valor: any) {
    this.horasExtras = Number(valor) || 0;
    this.actualizarHoraFin();
  }

  enviarFormulario() {
    this.errorNombre = '';
    this.errorCorreo = '';
    this.errorTelefono = '';
    this.errorFecha = '';
    this.errorPersonas = '';
    this.errorTipoEvento = '';
    this.errorAlberca = '';
    this.errorHoraInicio = '';
    this.mensajeGeneral = '';

    let valido = true;

    if (!this.nombre.trim()) {
      this.errorNombre = 'Por favor ingresa tu nombre completo.';
      valido = false;
    }
    if (!this.correo.trim()) {
      this.errorCorreo = 'Por favor ingresa tu correo electrónico.';
      valido = false;
    }
    if (!this.telefono.trim()) {
      this.errorTelefono = 'Por favor ingresa tu teléfono.';
      valido = false;
    } else if (!/^[0-9]{10}$/.test(this.telefono)) {
      this.errorTelefono = 'El teléfono debe tener 10 dígitos numéricos.';
      valido = false;
    }
    if (!this.fecha) {
      this.errorFecha = 'Por favor selecciona la fecha del evento.';
      valido = false;
    }
    if (!this.personas) {
      this.errorPersonas = 'Por favor selecciona el número de personas.';
      valido = false;
    }
    if (!this.tipoEvento) {
      this.errorTipoEvento = 'Por favor selecciona el tipo de evento.';
      valido = false;
    }
    if (!this.alberca) {
      this.errorAlberca = 'Por favor selecciona si el evento es con alberca o sin alberca.';
      valido = false;
    }
    if (!this.horaInicio) {
      this.errorHoraInicio = 'Por favor selecciona la hora de inicio.';
      valido = false;
    }

    if (!valido) {
      this.mensajeGeneral = 'Por favor corrige los errores antes de enviar.';
      return;
    }

    this.mensajeGeneral = 'Formulario enviado correctamente. ¡Gracias por tu reservación!';
    this.actualizarResumen();
  }

  actualizarResumen() {
    this.resumen = [
      { label: 'Nombre', valor: this.nombre + ' ' + this.apellidos },
      { label: 'Correo', valor: this.correo },
      { label: 'Teléfono', valor: this.telefono },
      { label: 'Fecha del Evento', valor: this.fecha },
      { label: 'Personas', valor: this.personas },
      { label: 'Tipo de Evento', valor: this.tipoEvento },
      { label: 'Con/ Sin Alberca', valor: this.alberca },
      { label: 'Hora Inicio', valor: this.horaInicio },
      { label: 'Hora Fin', valor: this.horaFin },
      { label: 'Color del Mantel', valor: this.colorMantel },
      { label: 'Extras', valor: this.extras.join(', ') || 'Ninguno' },
    ];
  }
}