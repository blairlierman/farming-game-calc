import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';


const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'about', component: AboutPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
