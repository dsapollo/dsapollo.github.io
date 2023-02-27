import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-horizontal-scroll',
  templateUrl: './horizontal-scroll.component.html',
  styleUrls: ['./horizontal-scroll.component.scss'],
})
export class HorizontalScrollComponent implements OnInit {
  @Input('tableContent') tableContent?: ElementRef | any;
  constructor() {}

  ngOnInit(): void {
    this.scrollRight();
    this.scrollLeft();
  }
  scrollRight(): void {
    this.tableContent?.nativeElement.scrollTo({
      left: this.tableContent.nativeElement.scrollleft + 150,
      behavior: 'smooth',
    });
  }

  scrollLeft(): void {
    this.tableContent?.nativeElement.scrollTo({
      left: this.tableContent.nativeElement.scrollleft - 150,
      behavior: 'smooth',
    });
  }
}
