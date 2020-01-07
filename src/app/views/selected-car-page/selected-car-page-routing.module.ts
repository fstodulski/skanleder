import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { SelectedCarPageComponent } from './selected-car-page.component';

const routes: Routes = [
  {
    path: '',
    component: SelectedCarPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectedCarPageRoutingModule {}
