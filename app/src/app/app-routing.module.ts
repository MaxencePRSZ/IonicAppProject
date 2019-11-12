import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'add', loadChildren: './add/add.module#AddPageModule' },
  { path: 'view/:id', loadChildren: './view/view.module#ViewPageModule' },
  { path: 'recipe/:id', loadChildren: './recipe/recipe.module#RecipePageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }), HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
