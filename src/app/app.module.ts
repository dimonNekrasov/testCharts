import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {MatTabsModule} from '@angular/material/tabs';
import {OnlineComponent} from './components/online/online.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {PurchaseComponent} from './components/purchase/purchase.component';
import {MatSelectModule} from '@angular/material/select';
import {ManuallyEventComponent} from './components/manually-event/manually-event.component';
import {AutomaticEventComponent} from './components/automatic-event/automatic-event.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatRadioModule} from '@angular/material/radio';
import {HttpClientModule} from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {AllEventsComponent} from './components/all-events/all-events.component';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { OsPipe } from './pipes/os.pipe';
import { DevicePipe } from './pipes/device.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    OnlineComponent,
    PurchaseComponent,
    ManuallyEventComponent,
    AutomaticEventComponent,
    AllEventsComponent,
    OsPipe,
    DevicePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    NgxChartsModule,
    MatSelectModule,
    MatSidenavModule,
    MatRadioModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
