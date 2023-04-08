// import { Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from "@angular/core";
// import { Subject } from "rxjs";




// @Directive({
//     selector:'[LazyAutoComplete',
// })

// export class LazyAutoCompleteDirective implements OnInit,OnDestroy{
//     constructor(private elRef:ElementRef) {}

//     currentMax :number =0;
//     @Output() onScroll =new EventEmitter<any>();

//     @Input() scrollThresold:number =80;

//     @Input('reset') reset$:Subject<any> =new Subject<null>();

//     ngOnInit(): void {
//         throw new Error("Method not implemented.");
//     }
//     ngOnDestroy(): void {
//         throw new Error("Method not implemented.");
//     }
// }