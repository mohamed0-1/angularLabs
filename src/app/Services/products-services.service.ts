import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../Models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsServicesService {

  private prdoductsList: Product[] = [];
  addItemToshoppingCartItems: any;
  productNeededCount: number | undefined;

  constructor(private httpClient:HttpClient) {}

getAllproducts():Observable <Product[]>
{
   return this.httpClient.get<Product[]>(environment.APIURL+"/products")
}

getproductbyCatID(catid:number):Observable <Product[]>{

  return this.httpClient.get<Product[]>(environment.APIURL+"/products?CategoryID="+catid)
}

getProdcutByID(prdID:number):Observable <Product>{
  
  return this.httpClient.get<Product>(environment.APIURL+"/products/"+prdID) 

}


  increase(inputVal: any, product: Product) {
    this.productNeededCount = +inputVal.value;
    if (product.Quantity) {
      product.Quantity--;
      inputVal.value++;
    } else {
      alert('Not Enough Quantity');
    }

  }
  decrease(inputVal: any, product: Product) {
    if (inputVal.value > 0) {
      product.Quantity++;
      inputVal.value--;
    }

    
  }
}








