import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Html5validatorsComponent } from './forms/html5validators/html5validators.component';
import { ViewChildrenComponent } from './component-communication/view-children/view-children.component';

@NgModule({
  declarations: [
    AppComponent,
    Html5validatorsComponent,
    ViewChildrenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
