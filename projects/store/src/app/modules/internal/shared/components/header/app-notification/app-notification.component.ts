import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalConfig, ModalDialogComponent } from '../../modal-dialog/modal-dialog.component';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { StateService } from '../../../services/state.services';
import { ToastrService } from 'ngx-toastr';
import { Notification } from '../../../models/common';

@Component({
  selector: 'app-app-notification',
  templateUrl: './app-notification.component.html',
  styleUrls: ['./app-notification.component.scss']
})
export class AppNotificationComponent implements OnInit {

  @ViewChild('notificationModal')
  private notificationModal!:ModalDialogComponent;
  @ViewChild('notificationResult')
  private notificationResult!:ElementRef;
  @ViewChild('dropDown',{static:true}) notificationMenu!:NgbDropdown

  isInitalLoading =true;
  notificationCount:number =0;
  notificationList:Notification[] =[];
  page=1;
  pageSize=20;
  loadMore=true;
  shouldAutoCloseDropdown=true;
  isOpen=false;

  modalData:Notification | null =null;
  modalConfig:ModalConfig ={
    modalTitle:'Notification',
    showCloseButton:true,
    showDismissButton:true,
    dismissButtonLabel:'Remove',
    closeButtonLabel:'Close',
  };
  dismissNotification: any;

  constructor(
    private stateService:StateService,
    private changeDetector:ChangeDetectorRef,
    private toastService:ToastrService
  ) { }

  ngOnInit(): void {

  }
  handleDropdownToggle() {
    this.changeDetector.detectChanges();
    this.isOpen=this.notificationMenu?.isOpen();


    if(this.isOpen){
      this.getNotificationCount();
      this.getNotifications();
    }
  }

  previousOpenModal =false;
  previousOpenedConfirmModal =false;
  handleDropdownChange(){
    const isOpen =this.notificationMenu?.isOpen();
    const isModalOpened =this.notificationModal.isOpen();
    const isConfirmModalOpened =this.confirmModal.isOpen();

    if(
      !isOpen &&
      ((this.previousOpenModal && !isModalOpened) || 
      isModalOpened || 
      (this.previousOpenedConfirmModal && !isConfirmModalOpened) ||
      isConfirmModalOpened)
    ){
      this.notificationMenu?.open();
    }
    this.previousOpenModal =isModalOpened;
    this.previousOpenedConfirmModal = isConfirmModalOpened;
  }

  getNotificationCount(){

  }

  getNotifications(){

  }

  @ViewChild('confirmModal') private confirmModal!:ModalDialogComponent;
  confirmModalConfig:ModalConfig ={
    modalTitle:'Confirm',
    showDismissButton:true,
    showCloseButton:true,
  };

  async openConfirmModal(){
    this.previousOpenedConfirmModal=true;
    const result =await this.confirmModal.open({
      centered:true,
      backdrop:'static',
    });
    return result;
  }

  async openModal(notification:Notification){
    this.modalData =notification;
    this.shouldAutoCloseDropdown=false;

    this.markRead();
    const result =await this.notificationModal.open({
      centered:true,
      backdrop:'static',
      size:'md',
      scrollable:true,
    });
    if(result ===true){
      this.dismissNotification();
    }
    this.modalData=null;
    this.shouldAutoCloseDropdown=true;
    return result;

  }

  dismissAllNotification(){

  }
  markRead(){

  }
}
