import { RouterModule, Routes } from '@angular/router';
import { BaseServiceComponent } from './components/base-service/base-service.component';
import { LocationComponent } from './components/location/location.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { OurServiceComponent } from './components/our-service/our-service.component';
import { OurAddServiceComponent } from './components/our-add-service/our-add-service.component';
import { BasicServicesComponent } from './components/basic-services/basic-services.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { BudgetComponent } from './components/budget/budget.component';
import { InpersonReservationComponent } from './components/inperson-reservation/inperson-reservation.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

export const routes: Routes = [
  { path:'', component: BaseServiceComponent, title: 'Base Service' },
  { path: 'location', component: LocationComponent, title: 'Location' },
  { path: 'our-add-service', component: OurAddServiceComponent, title: 'Our Add Service' },
  { path: 'app-basic-services', component: BasicServicesComponent, title: 'Basic Services' },
  { path: 'app-reservation', component: ReservationComponent, title: 'Reservation' },
  { path: 'app-inperson-reservation', component: InpersonReservationComponent, title: 'In Person Reservation' },
  { path: 'app-budget', component: BudgetComponent, title: 'Budget' },
  { path: 'app-about-us', component: AboutUsComponent, title: 'About Us' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
