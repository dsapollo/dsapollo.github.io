import {
  Directive,
  ElementRef,
  OnInit,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({ selector: '[remainingHeight]' })
export class RemainingHeightDirective implements OnInit {
  @HostBinding('style.height') height = 'auto';

  @HostListener('window:resize', ['$event']) onResize(event: any) {
    this.height = `${
      this.elRef.nativeElement.ownerDocument.documentElement.clientHeight -
      this.elRef.nativeElement.getBoundingClientRect().top
    }px`;
  }

  constructor(private elRef: ElementRef<HTMLDivElement>) {}

  ngOnInit() {
    setTimeout(() => {
      this.height = `${
        this.elRef.nativeElement.ownerDocument.documentElement.clientHeight -
        this.elRef.nativeElement.getBoundingClientRect().top
      }px`;
    });
  }
}
