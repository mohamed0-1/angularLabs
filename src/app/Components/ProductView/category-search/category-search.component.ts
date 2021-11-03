import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { Category } from 'src/app/Models/category';
import { CategoriesServicesService } from 'src/app/Services/categories-services.service';
/* import { ProductsComponent } from '../../products/products.component';
 */import { ProductsViewComponent } from '../products-view/products-view.component';
@Component({
  selector: 'app-category-search',
  templateUrl: './category-search.component.html',
  styleUrls: ['./category-search.component.scss'],
})
export class CategorySearchComponent implements OnInit,AfterViewInit,OnChanges {
  categoriesList: Category[] = []; 
  selectedCategory: number = 0;
  
  cartItems: any[] = [];
  totalPrice: number = 0;
  totalPriceWithTax: number = 0; 
  
  @ViewChild('catdropdown') selectval!:ElementRef; 
  @ViewChild('obj') inpvalue!:ElementRef; 
  @ViewChild(ProductsViewComponent) prods!:ProductsViewComponent; 
  inpval:string="";

  constructor(private catSer:CategoriesServicesService) {
    this.catSer.getcategories().subscribe(categories=>{
      this.categoriesList=categories;
    })
    
  }
  ngOnChanges(changes: SimpleChanges): void {
     
  }
  
  
   ngOnInit(): void {
     this.cartItems=this.catSer.cartItems; 
    
  } 

ngAfterViewInit(){

 

}

  addItemToshoppingCartItems(UserCartItems: any) {
    this.catSer.addItemToshoppingCartItems(UserCartItems) 
    this.totalPrice=this.catSer.totalPrice;
    this.totalPriceWithTax=this.catSer.totalPriceWithTax;
   
  } 
}


