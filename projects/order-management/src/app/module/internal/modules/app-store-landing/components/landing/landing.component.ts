import { Component, OnInit } from '@angular/core';
import { ApiService } from 'projects/service-management/src/app/modules/internal/shared/services/api.service';
import { CartService } from 'projects/service-management/src/app/modules/internal/shared/services/cart.service';


import { Product } from '../../models/product';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {


  public filterCategory : any
  products: Product[] = [];
  searchKey:string ="";
  constructor(private orderService: OrderService, private cartService : CartService) { }

  ngOnInit(): void {
    this.getproduct();
    this.orderService.getProducts()
    .subscribe(res=>{
      this.filterCategory = res;
      this.products.forEach((a:any) => {
        if(a.category ==="women's clothing" || a.category ==="men's clothing"){
          a.category ="fashion"
        }
        Object.assign(a,{quantity:1,total:a.price});
      });
      console.log(this.products)
    });

    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
  filter(category:string){
    this.filterCategory = this.products
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }

  getproduct() {
    this.orderService.getProducts().subscribe((result) => {
      this.products= result.data.getProducts;
    });
  }


}
