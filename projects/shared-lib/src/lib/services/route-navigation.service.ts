import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RouteNavigationService {
  private _previousUrl: string = '';
  private _currentUrl: string = '';
  private _routeHistory: string[] = [];
  private navigationCount = 0;

  constructor(public router: Router) {
    this._routeHistory = [];
    router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd | any) => {
        ++this.navigationCount;
        this.setURL(event);

        if (this.navigationCount === 2) {
          window.addEventListener('beforeunload', function (e) {
            e.preventDefault();
            e.returnValue = '';
          });
        }
      });
  }

  private setURL(event: NavigationEnd) {
    const tempUrl = this._currentUrl;
    const newUrl = event.urlAfterRedirects;
    this._previousUrl = tempUrl;
    this._currentUrl = newUrl;
    if (!newUrl.includes('/edit') && newUrl !== tempUrl) {
      if (this.getLastUrl() !== newUrl) this._routeHistory.push(newUrl);
    }
  }

  getLastUrl() {
    return this._routeHistory.length > 0
      ? this._routeHistory[this._routeHistory.length - 1]
      : null;
  }

  goBack() {
    let previousUrl = this.getLastUrl();

    if (this.currentUrl === previousUrl) {
      this.routeHistory.pop();
      previousUrl = this.getLastUrl();
    }
    if (previousUrl) {
      this.router.navigateByUrl(previousUrl);
    }
  }

  get previousUrl(): string {
    return this._previousUrl;
  }

  get currentUrl(): string {
    return this._currentUrl;
  }

  get routeHistory(): string[] {
    return this._routeHistory;
  }
}
