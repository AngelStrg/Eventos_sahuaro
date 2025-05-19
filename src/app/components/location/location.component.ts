import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { BaseServiceComponent } from '../base-service/base-service.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
  standalone: true,
  imports: [CommonModule, BaseServiceComponent],
})
export class LocationComponent implements AfterViewInit {
  @ViewChild('baseServiceRef') baseServiceComponent!: BaseServiceComponent;

  ngAfterViewInit() {
    // Aquí ya puedes acceder a las propiedades o métodos de BaseServiceComponent
    console.log(this.baseServiceComponent);
  }
}

