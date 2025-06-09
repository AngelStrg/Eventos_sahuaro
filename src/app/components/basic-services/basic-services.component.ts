import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { FooterComponent } from "../footer/footer.component";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OurServiceService } from '../../services/our-service.service';
import { OurService } from '../../models/our-service.interface';
@Component({
  selector: 'app-basic-services',
  imports: [ NavBarComponent, FooterComponent],
  templateUrl: './basic-services.component.html',
  styleUrls: ['./basic-services.component.css'] // Aquí se enlaza el archivo CSS
})
export class BasicServicesComponent implements OnInit {
formulario!: FormGroup;
  servicios: OurService[] = [];
  cargando = true;

  constructor(private service: OurServiceService) {}

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
