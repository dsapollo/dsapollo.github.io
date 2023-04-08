import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AvatarNameComponent } from "./components/avatar-name/avatar-name.component";
import { ConfirmModalComponent } from "./components/confirm-modal/confirm-modal.component";
import { PageMaintenanceComponent } from "./components/error/page-maintenance/page-maintenance.component";
import { SystemErrorComponent } from "./components/error/system-error/system-error.component";
import { UnauthorizedComponent } from "./components/error/unauthorized/unauthorized.component";
import { AppNotificationComponent } from "./components/header/app-notification/app-notification.component";
import { HeaderComponent } from "./components/header/header.component";
import { LoaderComponent } from "./components/loader/loader.component";
import { ModalDialogComponent } from "./components/modal-dialog/modal-dialog.component";
import { ModalComponent } from "./components/modal/modal.component";
import { SideNavComponent } from "./components/side-nav/side-nav.component";
import { HomeComponent } from "../store-landing/components/home/home.component";
import { AvatarNamePipe } from "./pipes/avatar-name.pipe";
import { ProfileComponent } from "./components/header/profile/profile.component";
import { FullnamePipe } from "./pipes/fullname.pipe";
import { GraphqlModule } from "../graphql/graphql.module";
import { MsalModule } from "@azure/msal-angular";
import { CreateLocationIconComponent } from "./icons/createlocation/createlocation";
import { LoginComponent } from './components/login/login.component';




@NgModule({
    declarations:[
        LoaderComponent,
        HeaderComponent,
        ModalComponent,
        ModalDialogComponent,
        SystemErrorComponent,
        UnauthorizedComponent,
        AppNotificationComponent,
        AvatarNameComponent,
        SideNavComponent,
        LoginComponent,
        AvatarNamePipe,
        ProfileComponent,
        FullnamePipe,
        UnauthorizedComponent,
        AvatarNameComponent,
        PageMaintenanceComponent,
        CreateLocationIconComponent,
        LoaderComponent,
        LoginComponent
       
        
        

    ],
    exports:[
        LoaderComponent,
        HeaderComponent,
        ModalComponent,
        ModalDialogComponent,
        SystemErrorComponent,
        UnauthorizedComponent,
        AppNotificationComponent,
        AvatarNameComponent,
        SideNavComponent,
        AvatarNamePipe,
        ProfileComponent,
        FullnamePipe,
        GraphqlModule,
        MsalModule,
        UnauthorizedComponent,
        PageMaintenanceComponent,
        CreateLocationIconComponent,
        LoginComponent

    ],
    imports:[
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
    ],
    entryComponents:[ConfirmModalComponent],
})

export class SharedModule{}