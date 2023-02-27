import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar-name',
  templateUrl: './avatar-name.component.html',
  styleUrls: ['./avatar-name.component.scss'],
})
export class AvatarNameComponent implements OnInit {
  @Input() user: any = { Name: '' };
  @Input() isSmall = false;
  constructor() {}

  ngOnInit(): void {}
}
