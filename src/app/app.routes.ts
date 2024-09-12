import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

import { AdminDashboardComponent } from './dashboard/admin-dashboard.component';
import { AdminProductListComponent } from './product-list/admin-product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'products', component: ProductListComponent },
    { path: 'products/:id', component: ProductDetailComponent },
    { path: 'admin', component: AdminDashboardComponent },
    { path: 'admin/products', component: AdminProductListComponent },
    { path: 'admin/products/add', component: ProductFormComponent },
    { path: 'admin/products/edit/:id', component: ProductFormComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' }

];
