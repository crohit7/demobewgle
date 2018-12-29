import { Component, OnInit } from '@angular/core';
import { OperationService } from 'src/app/services/operation.service';
import { Product } from 'src/app/Models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private operation: OperationService) { }

  productList:Product[]=[];

  ngOnInit() {
    this.getProducts();
  }
  getProducts()
  {
    this.operation
    .getpProducts()
    .subscribe(slots => {
      this.productList = slots;
    console.log(this.productList);
    })
  }
}
