import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layouts/home/home.component';
import { ProductPageComponent } from './pages/base/product-page/product-page.component';
import { ProductDetailPageComponent } from './pages/base/product-detail-page/product-detail-page.component';
import { SignUpComponent } from './pages/base/sign-up/sign-up.component';
import { SignInComponent } from './pages/base/sign-in/sign-in.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { ProductListComponent } from './pages/admin/product-list/product-list.component';
import { ProductUpdateComponent } from './pages/admin/product-update/product-update.component';
import { ProductAddComponent } from './pages/admin/product-add/product-add.component';
import { CategoryListComponent } from './pages/admin/category-list/category-list.component';
import { CategoryUpdateComponent } from './pages/admin/category-update/category-update.component';
import { CategoryAddComponent } from './pages/admin/category-add/category-add.component';
import { ErrorpageComponent } from './pages/errorpage/errorpage.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: '', component: ProductPageComponent },
      { path: 'product', component: ProductPageComponent },
      { path: 'product/:id', component: ProductDetailPageComponent },
      { path: 'signin', component: SignInComponent },
      { path: 'signup', component: SignUpComponent },
    ]
  },
  {
    path: 'admin', component: DashboardComponent, children: [
      { path: 'product', component: ProductListComponent },
      { path: 'product/:id/update', component: ProductUpdateComponent },
      { path: 'product/add', component: ProductAddComponent },
      { path: 'category', component: CategoryListComponent },
      { path: 'category/:id/update', component: CategoryUpdateComponent },
      { path: 'category/add', component: CategoryAddComponent },
    ]
  },
  { path: '**', component: ErrorpageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
