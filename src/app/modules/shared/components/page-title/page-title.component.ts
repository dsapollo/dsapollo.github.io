import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouteNavigationService } from '../../services/route-navigation.service';


@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss']
})
export class PageTitleComponent implements OnInit {

  @Input() titleText: string = '';
  hideBackBtn: boolean = true;
  constructor(
    private location: Location,
    private routeNavigationService: RouteNavigationService,
    route: ActivatedRoute
  ) {
    const url: any = route.snapshot.url.join('');
    if (url === '') {
      this.hideBackBtn = false;
    }
  }

  ngOnInit(): void {}

  goToPreviousPage() {
    this.routeNavigationService.goBack();
  }
}
