//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
//Components
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavMenuComponent } from './sidenav-menu/sidenav-menu.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { BodyComponent } from './body/body.component';

@NgModule({
  declarations: [
    HomeComponent,
    FooterComponent,
    SidenavMenuComponent,
    TopMenuComponent,
    NotFoundComponent,
    SignInComponent,
    BodyComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class MasterPageModule { }
