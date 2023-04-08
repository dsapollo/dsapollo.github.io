import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { SharedLibComponent } from './shared-lib.component';



@NgModule({
  declarations: [
    SharedLibComponent,
  ],
  imports: [
    ToastrModule.forRoot({
      closeButton:true,
      preventDuplicates:true,
      enableHtml:true,
      newestOnTop:false,
      positionClass:'toast-top-right',
      countDuplicates:true,
      timeOut:5000,
      extendedTimeOut:5000,
    }),
  ],
  exports: [
    SharedLibComponent,
  ]
})
export class SharedLibModule { }
