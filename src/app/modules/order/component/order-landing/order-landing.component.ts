import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-landing',
  templateUrl: './order-landing.component.html',
  styleUrls: ['./order-landing.component.scss']
})
export class OrderLandingComponent implements OnInit {
  breadcrumbs: { path?: string; text: string }[] = [{ text: 'Orders' }];

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  createorder() {
    this.router.navigate(['myorder','createorder']);
  }

}
