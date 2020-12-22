import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {    
    path: '',    
    component: DashboardComponent,   
    data: {    
      title: 'Dashboard Page'   
    }    
  },
  {    
    path: 'login',    
    component: LoginFormComponent,    
    data: {    
      title: 'Login Page'    
    }    
  },  
  {    
    path: 'products',    
    component: ProductsComponent,    
    data: {    
      title: 'Products'    
    }    
  },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
