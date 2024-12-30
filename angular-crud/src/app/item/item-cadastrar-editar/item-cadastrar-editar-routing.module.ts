import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemCadastrarEditarComponent } from './item-cadastrar-editar/item-cadastrar-editar.component';
import { ItemCadastrarService } from './item-cadastrar.service';

const routes: Routes = [
  {
      path: "",
      component: ItemCadastrarEditarComponent,
      resolve: {
          item: ItemCadastrarService,
      },
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemCadastrarEditarRoutingModule { }
