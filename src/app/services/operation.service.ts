import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../Models/product';

@Injectable({
  providedIn: 'root'
})
export class OperationService {

  url:string='http://localhost:3000/products';

  constructor(private http:HttpClient) { }

  getpProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.url);
  }

}
