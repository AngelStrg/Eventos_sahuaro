import { RouterModule, Routes } from '@angular/router';
import { BaseServiceComponent } from './components/base-service/base-service.component';
import { LocationComponent } from './components/location/location.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { OurServiceComponent } from './components/our-service/our-service.component';
import { OurAddServiceComponent } from './components/our-add-service/our-add-service.component';
import { BasicServicesComponent } from './components/basic-services/basic-services.component';

export const routes: Routes = [
  { path:'', component: BaseServiceComponent, title: 'Base Service' },
  { path: 'location', component: LocationComponent, title: 'Location' },
  { path: 'our-add-service', component: OurAddServiceComponent, title: 'Our Add Service' },
  {path: 'app-basic-services', component: BasicServicesComponent, title: 'Basic Services' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
