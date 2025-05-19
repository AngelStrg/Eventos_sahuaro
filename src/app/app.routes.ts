import { RouterModule, Routes } from '@angular/router';
import { BaseServiceComponent } from './components/base-service/base-service.component';
import { LocationComponent } from './components/location/location.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { OurServiceComponent } from './components/our-service/our-service.component';

export const routes: Routes = [
  { path:'', component: BaseServiceComponent, title: 'Base Service' },
  { path: 'location', component: LocationComponent, title: 'Location' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
