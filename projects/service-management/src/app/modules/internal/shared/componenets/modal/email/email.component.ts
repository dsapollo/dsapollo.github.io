import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';


import { EmailService } from '../../../services/emailservice';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailModal implements OnInit {

  constructor(public modal: NgbActiveModal,private emailservice:EmailService, private formbuilder: FormBuilder,private toast:ToastrService) { }

  // mail:Email = new Email();
  // mails?:Email;

  ngOnInit(): void {

  }

  public MailForm: FormGroup = this.formbuilder.group({
    recipient: ['', [Validators.email, Validators.required]],
    subject: ['', [Validators.required]],
    msgBody: ['', [Validators.required]],

  });

  sendmail(){
    // console.log("details",this.MailForm)
    // this.mail.email = this.MailForm.value.email;
    // this.mail.subject = this.MailForm.value.subject;
    // this.mail.message = this.MailForm.value.message;
    this.emailservice.sendEmail(this.MailForm.value).subscribe(result=>{
     
      result.data.sendMail
         
// this.toast.success('Dear User Mail Has been Sent Successfully','Digital Store');
      
    })
 this.modal.close();

  }
  

}
