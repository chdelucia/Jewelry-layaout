import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders} from '@angular/core';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';


const appRoutes: Routes = [
  { path: '',      component: HomeComponent },
];


export const appRoutingProviders: any[] = [];
export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);