import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListaAnimaisComponent } from './components/lista-animais/lista-animais.component';

const routes: Routes = [
  {
    path: '',
    component: ListaAnimaisComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimaisRoutingModule {}
