import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { FormsModule } from '@angular/forms';
/* import { ProductsComponent } from './Components/products/products.component';
 */import { CommonModule } from '@angular/common';
import { HighlightDirective } from './Components/Directive/highlight.directive';
import { RoundedDirective } from './Directives/rounded.directive';
import { CurrencyPipe } from './Pipes/currency.pipe';
/* import { SearchComponent } from './Components/search/search.component'; */
import { ProductsViewComponent } from './Components/ProductView/products-view/products-view.component';
import { CategorySearchComponent } from './Components/ProductView/category-search/category-search.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { ProdbyidComponent } from './Components/ProductView/prodbyid/prodbyid.component';
import{HttpClientModule} from '@angular/common/http';
import { AddProductComponent } from './Components/ProductView/add-product/add-product.component';
import { ReqObjectsComponent } from './Components/req-objects/req-objects.component';
// import { ContactusComponent } from './contactus/contactus.component';
// import { AboutComponent } from './about/about.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
 /*    ProductsComponent, */
    HighlightDirective,
    RoundedDirective,
    CurrencyPipe,
/*     SearchComponent, */
    ProductsViewComponent,
    CategorySearchComponent,
    NotfoundComponent,
    ProdbyidComponent,
    AddProductComponent,
    ReqObjectsComponent,
    // ContactusComponent,
    // AboutComponent,
   
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, CommonModule , HttpClientModule ,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
