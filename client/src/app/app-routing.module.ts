import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScaleHistoryComponent } from './scale-history/scale-history.component';
import { ScaleViewComponent } from './scale-view/scale-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/scale-view', pathMatch: 'full' },
  { path: 'scale-view', component: ScaleViewComponent },
  { path: 'scale-history', component: ScaleHistoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
