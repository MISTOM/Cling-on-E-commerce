import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminProductListComponent } from './admin-product-list/admin-product-list.component';
import { AdminProductFormComponent } from './admin-product-form/admin-product-form.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'products', component: ProductListComponent },
    { path: 'products/:id', component: ProductDetailComponent },
    { path: 'admin', component: AdmindashboardComponent },
    { path: 'admin/products', component: AdminProductListComponent },
    { path: 'admin/products/add', component: AdminProductFormComponent },
    { path: 'admin/products/edit/:id', component: AdminProductFormComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' }

];
