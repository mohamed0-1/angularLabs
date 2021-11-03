import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ReqObj } from '../Models/req-obj';


@Injectable({
  providedIn: 'root'
})
export class ReqObjServicesService {

  constructor(private httpClient:HttpClient) { }

  getAllproducts():Observable <ReqObj>
{
   return this.httpClient.get<ReqObj>("https://reqres.in/api/product")
}
}
