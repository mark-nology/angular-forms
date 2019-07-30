import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeroFormComponent} from './components/hero-form/hero-form.component';
import {HeroListComponent} from './components/hero-list/hero-list.component';
import {NotFoundComponent} from './components/not-found/not-found.component';

const routes: Routes = [
  { path: 'hero-form', component: HeroFormComponent },
  { path: 'hero-list', component: HeroListComponent },
  { path: '', redirectTo: 'hero-list', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
