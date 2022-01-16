import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MegaMenuModule} from 'primeng/megamenu';

@NgModule({
  declarations: [AppComponent, DashboardComponent],
  imports: [BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MegaMenuModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
