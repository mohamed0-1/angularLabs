import { Component, OnInit } from '@angular/core';
import { ReqObj } from 'src/app/Models/req-obj';
import { ReqObjServicesService } from 'src/app/Services/req-obj-services.service';

@Component({
  selector: 'app-req-objects',
  templateUrl: './req-objects.component.html',
  styleUrls: ['./req-objects.component.scss']
})
export class ReqObjectsComponent implements OnInit {
reqprdsList?:ReqObj;
colors:string="#9999";
datalist:any;
  constructor(private reqprdSer:ReqObjServicesService) { }

  ngOnInit(): void {
    this.reqprdSer.getAllproducts().subscribe(productList=>{
      this.reqprdsList=productList;
      this.datalist=this.reqprdsList;
    });
  }

}
