import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { FooterComponent } from "../footer/footer.component";
import { AdditionalService } from '../../models/additional-service.interface';
import { AdditionalServicesService } from '../../services/additional-services.service';


@Component({
  selector: 'app-our-add-service',
  standalone: true,
  imports: [CommonModule, FormsModule, NavBarComponent, FooterComponent],
  templateUrl: './our-add-service.component.html',
  styleUrl: './our-add-service.component.css'
})
export class OurAddServiceComponent implements OnInit {
  formulario!: FormGroup;
  servicios: AdditionalService[] = [];
  cargando = true;

  constructor(private service: AdditionalServicesService) {}

  ngOnInit(): void {
    this.formulario = new FormGroup({
      id: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required),
      imagen: new FormControl('', Validators.required),
    });

    this.service.getServices().subscribe(data => {
      this.servicios = data;
      this.cargando = false;
    });
  }

}
