import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myorder-landing',
  templateUrl: './myorder-landing.component.html',
  styleUrls: ['./myorder-landing.component.scss']
})
export class MyorderLandingComponent implements OnInit {
  breadcrumbs: { path?: string; text: string }[] = [{ text: 'My Orders' }];
  constructor(private router:Router) { }

  ngOnInit(): void {
  }




}
