import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { collection, collectionData, Firestore} from '@angular/fire/firestore';
import { Cost } from '../../models/cost.interface';

@Component({
  selector: 'app-budget',
  standalone: true,
  imports: [CommonModule, NavBarComponent, FooterComponent],
  templateUrl: './budget.component.html',
  styleUrl: './budget.component.css'
})
export class BudgetComponent {
costos: Cost[] = [];

  constructor(private firestore: Firestore) {}

  ngOnInit(): void {
    const costRef = collection(this.firestore, 'cost');
    collectionData(costRef, { idField: 'id' }).subscribe(data => {
      this.costos = data as Cost[];
    });
  }
}

