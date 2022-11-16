import { Component, NgModule } from '@angular/core';
import { MainPersonalComponent } from '../modules/personal/pages/main-personal/main-personal.component';
import { SiginComponent } from '../modules/auth/pages/sigin/sigin.component';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
const routes: Routes = [
  {
    path: '',
    component: MainPersonalComponent,
    pathMatch: 'full',
  },
  {
    path: 'auth',
    component: SiginComponent,
  },
  {
    path: '**',
    redirectTo: '',
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }
