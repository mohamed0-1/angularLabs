import { AddProductComponent } from './Components/ProductView/add-product/add-product.component';
import { ProdbyidComponent } from './Components/ProductView/prodbyid/prodbyid.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { HomeComponent } from './Components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsViewComponent } from './Components/ProductView/products-view/products-view.component';
import { ReqObjectsComponent } from './Components/req-objects/req-objects.component';
// import { ContactusComponent } from './Components/contactus/contactus.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'product',component:ProductsViewComponent},
  {path:'product/:pid/:length',component:ProdbyidComponent},
  // {path:'contactus',component:ContactusComponent},
  {path:'admin/insertproduct',component:AddProductComponent},  
  {path:'req-products',component:ReqObjectsComponent},  
  {
    path:'user',
    loadChildren:()=>import('./Components/user/user.module').then(m=>m.UserModule)
  },
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
