import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { LandingComponent } from './landing/landing.component';

const appRoutes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'checkout', component: CheckoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes,{
    preloadingStrategy:PreloadAllModules                // PreLoading in angular
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
