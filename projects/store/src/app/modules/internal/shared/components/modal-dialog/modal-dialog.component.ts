import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal, NgbModalConfig, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { StateService } from '../../services/state.services';

@Component({
  selector: 'modal',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.scss']
})
export class ModalDialogComponent implements OnInit {

  @Input() public modalConfig!:ModalConfig;
  @ViewChild('modal') private modalContent!:TemplateRef<ModalDialogComponent>;
  private modalRef!:NgbModalRef;
  constructor(
    public modalService:NgbModal,
    private stateService:StateService
  ) { }

  get isNavigationCollapsed(){
    return this.stateService.isSidebarCollapsed;
  }

  ngOnInit(): void {
  }

  open(options?:NgbModalOptions):Promise<boolean>{
    return new Promise<boolean>((resolve)=>{
      this.modalRef =this.modalService.open(this.modalContent,{
        ...(options || {}),
        modalDialogClass:this.isNavigationCollapsed?'collapsed' :'',
      });
      this.modalRef.result.then(resolve,resolve);
    });
  }

  close(){
    if(this.modalConfig.onCancel){
      this.modalConfig.onCancel();
      return;
    }
    this.modalRef?.close(false);
  }

  dismiss(){
    if(this.modalConfig.onSubmit){
      this.modalConfig.onSubmit();
      return;
    }
    this.modalRef?.dismiss(true);
  }

  route(){
    if(this.modalConfig.onRoute){
      this.modalConfig.onRoute();
      return;
    }
    this.modalRef?.dismiss(true);
  }
  closeSubmit(data?:any){
    if(data) this.modalRef?.dismiss(data);
    this.modalRef?.dismiss(true);
  }

  closeCancel(){
    this.modalRef?.close(false);
  }
  isOpen(){
    return this.modalService.hasOpenModals();
  }
}

export interface ModalConfig {

onCancel?:Function;
onSubmit?:Function;
onRoute?:Function;
modalTitle:string;
showCloseButton?:boolean;
showRouteButton?:boolean;
dismissButtonlabel?:string;
RouteButtonLavel?:string;
closeButtonLabel?:string;
disableCloseButton?:boolean;
disableDismissButton?:boolean;
disableRouteButton?:boolean;
dismissButtonDanger?:boolean;
dismissCloseDanger?:boolean;
dismissButtonLabel?:string;
showDismissButton?:boolean;
}

