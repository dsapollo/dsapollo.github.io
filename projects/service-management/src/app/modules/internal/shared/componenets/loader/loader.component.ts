import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state.services';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  constructor(private stateService:StateService) { }

  get isNavigationCollapsed(){
    return this.stateService.isSidebarCollapsed;
  }

  ngOnInit(): void {
  
  }

  get isLoading(){
    return this.stateService.isLoading;
  }

}
