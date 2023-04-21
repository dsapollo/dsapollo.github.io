import { Component, Inject } from '@angular/core';
import { Environment } from 'projects/shared-lib/src/lib/models/shared.model';
import { ThemeService } from 'shared-lib';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  environment:Environment
  title = 'service-management';


  constructor(private themeService:ThemeService,
    @Inject ('environment') environment:Environment){
      this.environment=environment;
    }

  get loginDisplay(){
    return true;
  }

  get currentTheme(){
    return this.themeService.currentTheme;
  }
}
