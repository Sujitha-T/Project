import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ToasterModule } from 'angular2-toaster';
//import { ToastrService } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';

import { ProductModule } from './product/product.module';

@NgModule({
  imports: [
    HttpModule,
    BrowserModule,
    ToasterModule,
    RouterModule,
    ProductModule,
    AppRoutingModule,
  ],
  declarations: [AppComponent, WelcomeComponent, PageNotFoundComponent],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
