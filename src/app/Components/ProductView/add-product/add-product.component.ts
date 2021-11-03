import { AddprodServiceService } from './../../../Services/addprod-service.service';
import { Product } from 'src/app/Models/product';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Models/category';
import { CategoriesServicesService } from 'src/app/Services/categories-services.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  categoriesList: Category[] = [];
  public completed=false;
  public notcompleted=false;
  selectedCategory: number = 0;
   newproduct:Product=
    {
      id:0,
      Name:"",
      Price:0,
      Quantity:0,
      ImgURL: "",
      CategoryID: 0
  
  }
   
  constructor(private catSer:CategoriesServicesService,
    private addprdSer:AddprodServiceService) { 
      this.catSer.getcategories().subscribe(categories=>{
        this.categoriesList=categories;
      })
  }


  addnewProduct(){
    if(this.newproduct.id!=0&&this.newproduct.Name!="")
    {
      if(this.newproduct.Quantity>0&&this.newproduct.Name!=""&&this.newproduct.CategoryID)
      {

        this.addprdSer.insertProduct(this.newproduct).subscribe(data=>{
          console.log(data)
          this.completed=true;
          this.notcompleted=false;
          window.location.href = "http://localhost:4200/home";
          
        })
      }else{this.notcompleted=true}
    }else{this.notcompleted=true}
  }
  ngOnInit(): void {
  }

}
