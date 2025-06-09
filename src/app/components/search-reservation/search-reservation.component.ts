import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
import { Dates } from '../../models/dates.interface';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';


@Component({
  selector: 'app-search-reservation',
  imports: [CommonModule, NavBarComponent, FooterComponent, RouterModule, FormsModule],
  templateUrl: './search-reservation.component.html',
  styleUrl: './search-reservation.component.css'
})
export class SearchReservationComponent {

  eventos: Dates[] = [];
  correoBusqueda: string = '';
  eventoEncontrado: Dates | null = null;
  busquedaRealizada: boolean = false;

  buscarPorCorreo() {
    const correo = this.correoBusqueda.trim().toLowerCase();

    if (!correo) {
      alert('Por favor ingrese un correo para buscar.');
      return;
    }

    // Buscar en la lista local (ya cargada desde Firestore)
    const encontrado = this.eventos.find(
      evento => evento.correo.toLowerCase() === correo
    );

    this.busquedaRealizada = true;
    this.eventoEncontrado = encontrado || null;


  }

  constructor(private firestore: Firestore) { }
  ngOnInit(): void {
    const eventosRef = collection(this.firestore, 'eventos');
    collectionData(eventosRef, { idField: 'id' }).subscribe(data => {
      this.eventos = data as Dates[];
    });
  }

}
