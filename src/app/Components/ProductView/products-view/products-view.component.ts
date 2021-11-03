
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Models/product';
import { ShoppingCartItems } from 'src/app/Models/shopping-cart-items';
import { ProductsServicesService } from 'src/app/Services/products-services.service';
@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.scss'],
})
export class ProductsViewComponent implements OnInit ,OnChanges{
  myDate: Date = new Date();
  show: boolean = false;
  @Input() sentCatIDFrmMaster: number = 0;
  greating: string = '';
  @ViewChild('objs') inptest!:ElementRef;
  totalOrderPrice: number = 0;
  UserCartItems: Product[] = [];
  prdsList: Product[] = [];
 
  @Output() addItemToshoppingCartItems: EventEmitter<ShoppingCartItems> =
    new EventEmitter<ShoppingCartItems>();

  productNeededCount: number = 0;

 /*  showMessage(Product: any): void {
    Product.Quantity--;
  } */

  public inpvalue="";
  constructor(private prdSer:ProductsServicesService) {
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.sentCatIDFrmMaster!=0) {
      this.prdSer.getproductbyCatID(this.sentCatIDFrmMaster).subscribe(productList=>{
        this.prdsList=productList; });
 }
    else {
       this.prdSer.getAllproducts().subscribe(productList=>{
        this.prdsList=productList;
      });
   }


  }

  ngOnInit(): void {

  }


  increase(inputVal: any, product: Product) {
    this.prdSer.increase(inputVal, product)

    this.addItemToshoppingCartItems.emit({
      productID: product.id,
      productName: product.Name,
      unitPrice: product.Price,
      selectedQuantity: inputVal.value,
      productImg: product.ImgURL,
    }); 
    
  }
  decrease(inputVal: any, product: Product) {
    this.prdSer.decrease(inputVal,product)
  
    this.addItemToshoppingCartItems.emit({
      productID: product.id,
      productName: product.Name,
      unitPrice: product.Price,
      selectedQuantity: inputVal.value,
      productImg: product.ImgURL,
    }); 
  }
}
