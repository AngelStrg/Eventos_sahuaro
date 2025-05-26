import { Component } from '@angular/core';
import { ExtraOptions, RouterModule } from '@angular/router';
import { NavBarComponent } from "../nav-bar/nav-bar.component";

@Component({
  selector: 'app-about-us',
  imports: [RouterModule, NavBarComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})

export class AboutUsComponent {
  
}
