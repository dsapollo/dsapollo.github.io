import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppNotificationComponent } from './header/app-notification/app-notification.component';
import { AvatarNameComponent } from './avatar-name/avatar-name.component';
import { ProfileComponent } from './header/profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HorizontalScrollComponent } from './horizontal-scroll/horizontal-scroll.component';
import { ApolloModule } from 'apollo-angular';
import { NoDataFoundComponent } from './no-data-found/no-data-found.component';
import { EmptySpacePipe } from './pipes/empty-space.pipe';
import { AvatarNamePipe } from './pipes/avatar-name.pipe';
import { FullnamePipe } from './pipes/fullname.pipe';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    ProfileComponent,
    AppNotificationComponent,
    AvatarNameComponent,
    SearchboxComponent,
    PageTitleComponent,
    BreadcrumbsComponent,
    HorizontalScrollComponent,
    NoDataFoundComponent,
    EmptySpacePipe,
    AvatarNamePipe,
    FullnamePipe,
    UnauthorizedComponent,
  ],

  exports: [
    HeaderComponent,
    ProfileComponent,
    AppNotificationComponent,
    AvatarNameComponent,
    SidebarComponent,
    SearchboxComponent,
    PageTitleComponent,
    PageTitleComponent,
    BreadcrumbsComponent,
    HorizontalScrollComponent,
    NoDataFoundComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ApolloModule,
    NgbModule,
  ],
  providers: [],
})
export class SharedModule {}
