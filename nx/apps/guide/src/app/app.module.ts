import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../modules/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MegaMenuModule} from 'primeng/megamenu';

@NgModule({
  declarations: [AppComponent, DashboardComponent],
  imports: [BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    MegaMenuModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
