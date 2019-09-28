import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { RecipesComponent } from './recipes/recipes.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  { path: '', component: AuthComponent},
  { path: 'recipes', component: RecipesComponent, canActivate: [AuthGuard]  },
  { path: '**', component: RecipesComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
