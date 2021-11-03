import { Product } from 'src/app/Models/product';
import { Component, OnInit } from '@angular/core';
import { ProductsServicesService } from 'src/app/Services/products-services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-prodbyid',
  templateUrl: './prodbyid.component.html',
  styleUrls: ['./prodbyid.component.scss']
})
export class ProdbyidComponent implements OnInit {

    sentprdID:number=0;
    prdslength:number=0;
    prod:Product|undefined;
    constructor(private prd:ProductsServicesService,
    private activatedroute:ActivatedRoute,
    private location:Location,
    private router:Router ) {}

  ngOnInit(): void {
     this.sentprdID=Number(this.activatedroute.snapshot.paramMap.get("pid"));
    this.prdslength=Number(this.activatedroute.snapshot.paramMap.get("length"));
   /*  this.prd.getProdcutByID(this.sentprdID).subscribe(prd=>{
      this.prod=prd; }); */

      this.activatedroute.paramMap.subscribe(
      (paramMap)=>{this.prd.getProdcutByID(this.sentprdID).subscribe(prd=>{
        this.prod=prd; });},
      (err)=>{console.log(err)}
    )  

  }
  goback(){
    this.location.back();
  }
prevprodcut(){this.router.navigate(['/product/',--this.sentprdID,this.prdslength])}
nextprodcut(){this.router.navigate(['/product/',++this.sentprdID,this.prdslength])}

}
