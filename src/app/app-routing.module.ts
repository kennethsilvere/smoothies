import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { RecipesComponent } from './recipes/recipes.component';


const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: '**', component: RecipesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
