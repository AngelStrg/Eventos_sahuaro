import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [CommonModule, FormsModule, NavBarComponent],
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
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
  colorMantel: string = '#fff';
  extras: string[] = [];
  horasExtras: number = 0;

  horasDisponibles = [
    { value: '08', display: '8:00 am' },
    { value: '09', display: '9:00 am' },
    { value: '10', display: '10:00 am' },
    { value: '11', display: '11:00 am' },
    { value: '12', display: '12:00 pm' },
    { value: '13', display: '1:00 pm' },
    { value: '14', display: '2:00 pm' },
    { value: '15', display: '3:00 pm' },
    { value: '16', display: '4:00 pm' },
    { value: '17', display: '5:00 pm' },
    { value: '18', display: '6:00 pm' },
    { value: '19', display: '7:00 pm' },
    { value: '20', display: '8:00 pm' },
  ];

  // Mensajes de error/información para mostrar en la UI
  errorNombre: string = '';
  errorCorreo: string = '';
  errorTelefono: string = '';
  errorFecha: string = '';
  errorPersonas: string = '';
  errorTipoEvento: string = '';
  errorAlberca: string = '';
  errorHoraInicio: string = '';
  mensajeGeneral: string = '';

  actualizarHoraFin() {
    if (!this.horaInicio) {
      this.horaFin = '';
      return;
    }
    const horaInicioNum = parseInt(this.horaInicio, 10);

    let finNum = horaInicioNum + 6 + this.horasExtras;

    if (finNum > 26) {
      finNum = 26;
    }

    if (finNum >= 24) {
      finNum = finNum - 24;
    }

    this.horaFin = this.formatearHora12(finNum);
  }

  formatearHora12(hora24: number): string {
    let hora = hora24;
    let sufijo = 'am';

    if (hora === 0) {
      hora = 12;
      sufijo = 'am';
    } else if (hora === 12) {
      sufijo = 'pm';
    } else if (hora > 12) {
      hora = hora - 12;
      sufijo = 'pm';
    }

    const horaStr = hora < 10 ? '0' + hora : hora.toString();

    return `${hora}:00 ${sufijo}`;
  }

  toggleExtra(extra: string, event: any) {
    if (extra === 'Hora extra' && !this.horaInicio) {
      // Mostrar mensaje de error en lugar de alert
      this.errorHoraInicio = 'Primero selecciona tu hora de inicio antes de agregar horas extras.';
      event.target.checked = false;
      return;
    } else {
      this.errorHoraInicio = '';
    }

    if (event.target.checked) {
      this.extras.push(extra);
      if (extra === 'Hora extra') {
        this.horasExtras++;
      }
    } else {
      this.extras = this.extras.filter(e => e !== extra);
      if (extra === 'Hora extra') {
        this.horasExtras--;
      }
    }
    this.actualizarHoraFin();
  }

  validarTipoEvento() {
    if (this.tipoEvento === 'XV Años') {
      this.mensajeGeneral = 'Por el tipo de evento XV Años, los precios pueden variar debido a contratación de seguridad.';
    } else {
      this.mensajeGeneral = '';
    }
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
    } else {
      const telefonoRegex = /^[0-9]{10}$/;
      if (!telefonoRegex.test(this.telefono)) {
        this.errorTelefono = 'El teléfono debe tener 10 dígitos numéricos.';
        valido = false;
      }
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
    // Aquí puedes agregar la lógica para enviar los datos a backend
  }
}



