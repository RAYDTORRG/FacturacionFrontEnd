import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from '../app/master-page/body/body.component';
import { HomeComponent } from './master-page/home/home.component';

const routes: Routes = [
  {
      path: '', component: BodyComponent,
      children: [
        { path: '',  component: HomeComponent },
        { path: 'admin', loadChildren: () =>
              import('./core/admin/admin.module').then(m => m.AdminModule)},
        { path: '**',  component: HomeComponent },
      ]
  },
  {path: '', redirectTo: '/body',  pathMatch: 'full' },
  {path: '**', component: BodyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
