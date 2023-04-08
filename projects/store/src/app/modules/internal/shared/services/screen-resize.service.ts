import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScreenResizeService {
  screenWidth: number = 0;
  screenHeight: number = 0;
  resizeObservable$: Observable<any> | undefined;
  resizeObserver: Observer<any> | undefined;
  constructor() {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;

    this.resizeObservable$ = new Observable((observer) => {
      this.resizeObserver = observer;
      this.updateScreenSize();
    });
  }
  getScreenSize() {
    return this.resizeObservable$;
  }
  updateScreenSize(eventTarget?: any) {
    this.screenWidth = (eventTarget || window).innerWidth;
    this.screenHeight = (eventTarget || window).innerWidth;

    this.resizeObserver?.next({
      width: this.screenWidth,
      height: this.screenHeight,
    });
  }
}

export enum Breakpoints {
  SM = 576,
  MD = 768,
  LG = 992,
  XL = 1200,
  XXL = 1400,
}
