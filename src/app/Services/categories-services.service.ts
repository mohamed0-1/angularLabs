import { Category } from './../Models/category';

import { Injectable } from '@angular/core';
import { Product } from '../Models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CategoriesServicesService  {
  categoriesList: Category[] = [];
  cartItems: any[] = [];
  totalPrice: number = 0;
  totalPriceWithTax: number = 0;
  constructor(private httpClient:HttpClient) {

   }
   ngOnInit(): void {}


  getcategories():Observable<Category[]>
  {
    return  this.httpClient.get<Category[]>(environment.APIURL+"/categories") 
  } 
  
   addItemToshoppingCartItems(UserCartItems: any) {
    this.totalPrice = 0;
    this.totalPriceWithTax = 0;
    let newItem = this.cartItems.find(
      (item, index) => UserCartItems.productID == item.productID
    );
    if (newItem) {
      newItem.selectedQuantity = UserCartItems.selectedQuantity;
    } else {
      this.cartItems.push(UserCartItems);
    }
    for (let i of this.cartItems) {
      this.totalPrice += i.unitPrice * i.selectedQuantity
    }
    
  }
     


 

  
}







