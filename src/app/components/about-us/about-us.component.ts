import { Component } from '@angular/core';
import { ExtraOptions, RouterModule } from '@angular/router';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-about-us',
  imports: [RouterModule, NavBarComponent, FooterComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})

export class AboutUsComponent {
  
}
