import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OperationService } from 'src/app/services/operation.service';
import { Product } from 'src/app/Models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private route:ActivatedRoute,private operation:OperationService) { }

  product :Product[];

  ngOnInit() {
    this.route.params.subscribe((data)=>{
      this.operation.getpProducts().subscribe((product)=>{
        this.product=product;
        console.log(this.product);
      });
    })
  }

}
