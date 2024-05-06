import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FabricsComponent } from './components/Fabrics/Fabrics.component';

export const routes: Routes = [
  { path: '', component: FabricsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
