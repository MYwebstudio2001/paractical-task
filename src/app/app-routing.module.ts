import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SummaryComponent } from './pages/summary/summary.component';
import { DetailsComponent } from './pages/details/details.component';

const routes: Routes = [
  {
    path: 'summary',
    component: SummaryComponent
  },
  {
    path: 'details',
    component: DetailsComponent
  },
  {
    path: '**',
    redirectTo: 'summary'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
