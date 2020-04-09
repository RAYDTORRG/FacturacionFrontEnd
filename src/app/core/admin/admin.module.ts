import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { SharedModule } from '../../shared/shared.module';

export const routes = [
  {
    path: '', component: AdminComponent, children: [{ path: '', redirectTo: 'body', pathMatch: 'full' }, ]
  }
];

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class AdminModule { }
