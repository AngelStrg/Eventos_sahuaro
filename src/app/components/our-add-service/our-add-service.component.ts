import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { FooterComponent } from "../footer/footer.component";
import { AdditionalService } from '../../models/additional-service.interface';
import { AdditionalServicesService } from '../../services/additional-services.service';

@Component({
  selector: 'app-our-add-service',
  standalone: true,
  imports: [CommonModule, NavBarComponent, FooterComponent],
  templateUrl: './our-add-service.component.html',
  styleUrl: './our-add-service.component.css'
})
export class OurAddServiceComponent implements OnInit {
  servicios: AdditionalService[] = [];
  cargando = true;

  serviciosFijos: AdditionalService[] = [
    {
      id: 'Palomera',
      descripcion: 'Servicio de Palomera 2 horas con 100 bolsitas chicas de palomitas (palomitas con sal y mantequilla).',
      imagen: 'MAQ_Palomera.jpg',
      precio: 1500
    },
    {
      id: 'Inflable Infantil Rojo',
      descripcion: 'Inflable infantil rojo de Cars Disney.',
      imagen: 'Infla_Rojo.jpg',
      precio: 400
    },
    {
      id: 'Inflable Infantil Rosa',
      descripcion: 'Inflable infantil rosa de princesas Disney.',
      imagen: 'Infla_Rosa.jpg',
      precio: 400
    }
  ];

  constructor(private service: AdditionalServicesService) {}

  ngOnInit(): void {
    this.service.getServices().subscribe(data => {
      this.servicios = [...this.serviciosFijos, ...data];
      this.cargando = false;
    });
  }
}
