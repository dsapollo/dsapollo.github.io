import { NgModule } from "@angular/core";
import { BreadcrumbsComponent } from "./componenets/breadcrumbs/breadcrumbs.component";
import { SidebarComponent } from "./componenets/sidebar/sidebar.component";
import { PageTitleComponent } from "./componenets/page-title/page-title.component";
import { EmptySpacePipe } from "./pipes/empty-space.pipe";
import { ScreenResizeService } from "./services/screen-resize.service";
import { PageMaintenanceComponent } from "./componenets/error/page-maintenance/page-maintenance/page-maintenance.component";
import { PageNotFoundComponent } from "./componenets/error/page-not-found/page-not-found/page-not-found.component";
import { FullnamePipe } from "./pipes/fullname.pipe";
import { DateFormatPipe } from "./pipes/date-format.pipe";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HorizontalScrollComponent } from "./componenets/horizontal-scroll/horizontal-scroll.component";
import { LoaderComponent } from "./componenets/loader/loader.component";
import { SearchboxComponent } from "./componenets/searchbox/searchbox.component";






@NgModule({
declarations:[
    BreadcrumbsComponent,
    SidebarComponent,
    PageTitleComponent,
    EmptySpacePipe,
    PageMaintenanceComponent,
    PageNotFoundComponent,
    FullnamePipe,
    DateFormatPipe,
    HorizontalScrollComponent,
    LoaderComponent,
    SearchboxComponent

],
exports:[
    BreadcrumbsComponent,
    SidebarComponent,
    PageTitleComponent,
    EmptySpacePipe,
    PageMaintenanceComponent,
    PageNotFoundComponent,
    FullnamePipe,
    DateFormatPipe,
    HorizontalScrollComponent,
    LoaderComponent,
    SearchboxComponent

],
imports:[
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
],
})
export class SharedModule {}