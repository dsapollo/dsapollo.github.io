import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  visible:boolean =false;

  @Input() direction:'left' | 'right' ='right';
  @Input() width:string ='50%';
  @Output() hide =new EventEmitter<null>();

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.visible=!this.visible;
  }

  onHide(){
    this.visible=false;
    this.hide.emit();
  }

}
