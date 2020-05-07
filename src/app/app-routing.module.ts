import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DonutsComponent } from './donuts/donuts.component';
import { DonutDetailComponent } from './donut-detail/donut-detail.component'


const appRoutes: Routes = [
  { path: 'donuts', component: DonutsComponent },
  { path: 'donuts/:id', component: DonutDetailComponent },
  { path: '', redirectTo: '/donuts', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
