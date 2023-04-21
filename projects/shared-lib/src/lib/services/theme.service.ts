import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { Lobs } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {


  
  themes:{
    [Lob:number]:{
      theme:string;
    };
  }={
    [Lobs.ADMIN]:{
      theme:'theme-ADMIN',

    },
    [Lobs.USER]:{
      theme:'theme-USER',
    },
  };

  currentTheme:string='theme-USER';
  private renderer:Renderer2;

  constructor(
    renderFactory:RendererFactory2,
    @Inject(DOCUMENT) private _document:HTMLDocument
  ) { 
    this.renderer =renderFactory.createRenderer(null,null);
  }

  setTheme(Lob:number){
    if(this.themes[Lob]){
      this.currentTheme=this.themes[Lob].theme;

      this.renderer.removeClass(document.documentElement,'theme-default');
      this.renderer.addClass(document.documentElement,this.currentTheme);

      if(Lob ===Lobs.ADMIN)
      this._document.getElementById('app-fav-icon')?.setAttribute('href','assets/img/admin');
    }
  }
}
