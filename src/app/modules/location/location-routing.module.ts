import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatelocationComponent } from './components/createlocation/createlocation.component';
import { LocationLandingComponent } from './components/location-landing/location-landing.component';
import { LocationComponent } from './components/location/location.component';
import { ViewalllocationComponent } from './components/viewalllocation/viewalllocation.component';
import { ViewlocationComponent } from './components/viewlocation/viewlocation.component';


const routes: Routes = [
  {
    path: '',
    component: LocationComponent,
  },
  {
    path: 'createlocation',
    component: CreatelocationComponent,
  },

  {
    path: 'viewlocation',
    component: ViewlocationComponent,
  },

  {
    path: 'viewalllocation',
    component: ViewalllocationComponent,
  },
 
  {
    path: 'location-landing',
    component: LocationLandingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class LocationRoutingModule {}