import { BrowserModule }  from '@angular/platform-browser';
import { BrowserAnimationsModule }          from '@angular/platform-browser/animations';
import { NgModule }       from '@angular/core';
import { HttpModule }     from '@angular/http';
import { routes, appRoutingProviders } from './app.routes'

import { AppComponent }   from './app.component';
import { HomeComponent }  from './home/home.component';
import { ProductsService } from './services/products.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    routes,
  ],
  providers: [appRoutingProviders,ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
