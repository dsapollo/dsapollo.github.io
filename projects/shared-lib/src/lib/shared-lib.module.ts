import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { SharedLibComponent } from './shared-lib.component';
import { ConnectionErrorModal } from './components/modals/connection-error/connection-error.component';
import { RemainingHeightDirective } from './directives/remaining-height.directive';



@NgModule({
  declarations: [
    SharedLibComponent,
    ConnectionErrorModal,
    RemainingHeightDirective
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
    SharedLibComponent,ConnectionErrorModal
  ]
})
export class SharedLibModule { }
