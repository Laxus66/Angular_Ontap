import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './layouts/home/home.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { ProductPageComponent } from './pages/base/product-page/product-page.component';
import { ProductDetailPageComponent } from './pages/base/product-detail-page/product-detail-page.component';
import { SignInComponent } from './pages/base/sign-in/sign-in.component';
import { SignUpComponent } from './pages/base/sign-up/sign-up.component';
import { ProductListComponent } from './pages/admin/product-list/product-list.component';
import { ProductAddComponent } from './pages/admin/product-add/product-add.component';
import { ProductUpdateComponent } from './pages/admin/product-update/product-update.component';
import { CategoryListComponent } from './pages/admin/category-list/category-list.component';
import { CategoryAddComponent } from './pages/admin/category-add/category-add.component';
import { CategoryUpdateComponent } from './pages/admin/category-update/category-update.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    ProductPageComponent,
    ProductDetailPageComponent,
    SignInComponent,
    SignUpComponent,
    ProductListComponent,
    ProductAddComponent,
    ProductUpdateComponent,
    CategoryListComponent,
    CategoryAddComponent,
    CategoryUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
