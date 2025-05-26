import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { FooterComponent } from "../footer/footer.component";
@Component({
  selector: 'app-basic-services',
  imports: [ NavBarComponent, FooterComponent],
  templateUrl: './basic-services.component.html',
  styleUrls: ['./basic-services.component.css'] // Aquí se enlaza el archivo CSS
})
export class BasicServicesComponent {}
