import { Component } from '@angular/core';
import { NavBarComponent } from "../components/nav-bar/nav-bar.component";
import { FooterComponent } from "../components/footer/footer.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-terminos',
  imports: [NavBarComponent, FooterComponent, CommonModule, FormsModule, RouterModule],
  templateUrl: './terminos.component.html',
  styleUrls: ['./terminos.component.css']
})
export class TerminosComponent {

}
