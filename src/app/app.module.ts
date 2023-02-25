import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { ProductsService } from './products.service';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductDetailsGuard } from './product-details.guard';

const routes: Routes =[
  {path:"users",component:UsersComponent},
  {path:"products",component:ProductsComponent},
  {path:"products/:id",component:ProductDetailsComponent,canActivate:[ProductDetailsGuard]},
  {path:"home",component:HomeComponent},
  {path:"",redirectTo:"/home",pathMatch:'full'}
  
]
@NgModule({
  declarations: [AppComponent, NavbarComponent, ProductsComponent, UsersComponent, HomeComponent, ProductDetailsComponent],
  imports: [BrowserModule, HttpClientModule,RouterModule.forRoot(routes)],
  providers: [ProductsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
