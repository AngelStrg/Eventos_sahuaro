import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { FooterComponent } from "../footer/footer.component";


@Component({
  selector: 'app-our-add-service',
  imports: [CommonModule, FormsModule, NavBarComponent, FooterComponent],
  templateUrl: './our-add-service.component.html',
  styleUrl: './our-add-service.component.css'
})
export class OurAddServiceComponent {

}
