import { Component, OnInit } from '@angular/core';
import { ProductList } from '../../model/productlist';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  constructor(private orderService: OrderService) {}

  products: ProductList[] = [];

  ngOnInit(): void {
    this.getAllproduct();
  }

  getAllproduct() {
    this.orderService.findAll().subscribe((result) => {
      this.products = result.data.getAllProductList;
    });
  }

  createorder() {}
}
