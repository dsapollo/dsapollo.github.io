import {
  AfterContentChecked,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../model/product';
import { MyorderService } from '../../services/myorder.service';

@Component({
  selector: 'app-myorder',
  templateUrl: './myorder.component.html',
  styleUrls: ['./myorder.component.scss'],
})
export class MyorderComponent implements OnInit, AfterContentChecked {
  @ViewChild('tableContent', { read: ElementRef })
  public tableElement!: ElementRef<any>;
  tableReference: any;
  constructor(private router: Router, private myorderService: MyorderService) {}

  ngAfterContentChecked(): void {
    this.tableReference = this.tableElement;
  }

  product: Product[] = [];
  count: string | number = '';

  ngOnInit(): void {
    this.getproduct();
    this.getTotalOrderProductCount();
  }

  getproduct() {
    this.myorderService.getProducts().subscribe((result) => {
      this.product = result.data.getProducts;
    });
  }
  getTotalOrderProductCount() {
    this.myorderService.getTotalOrderProductCount().subscribe(({ data }) => {
      this.count = data.getTotalOrderProductCount;
    });
  }
}
