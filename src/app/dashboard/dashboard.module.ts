import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from '../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import { ChartistModule } from 'ng-chartist';
import { SalesOverviewGrapComponent } from './dashboard-components/sales-overview-grap/sales-overview-grap.component';
import { VisiterGraphComponent } from './dashboard-components/visiter-graph/visiter-graph.component';
import { StickerComponent } from './dashboard-components/sticker/sticker.component';
import { ContactsComponent } from './dashboard-components/contacts/contacts.component';
import { ActivityComponent } from './dashboard-components/activity/activity.component';
import { InvoiceListComponent } from './dashboard-components/invoice-list/invoice-list.component';
import { InvoiceDetailComponent } from './dashboard-components/invoice-detail/invoice-detail.component';
import { InvoiceCreateComponent } from './dashboard-components/invoice-create/invoice-create.component';
import { SearchByNamePipe } from '../shared/pipes/search-by-name.pipe';

@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    ChartistModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule.forChild(DashboardRoutes)
  ],
  declarations: [DashboardComponent, SalesOverviewGrapComponent, VisiterGraphComponent, StickerComponent, ContactsComponent, ActivityComponent, InvoiceListComponent, InvoiceDetailComponent, InvoiceCreateComponent, SearchByNamePipe]
})
export class DashboardModule {}
