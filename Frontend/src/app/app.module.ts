import 'reflect-metadata';
import '../polyfills';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { httpInterceptorProviders } from './interceptors/index';
//Modules
import { SharedModule } from './shared/shared.module';
import { EntryModule } from './Modules/Entry/entry.module';
import { SettingsModule } from './Modules/settings/settings.module';

//Route
import { AppRoutingModule } from './app-routing.module';

//Root Component
import { AppComponent } from './app.component';

//Services

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,

    SharedModule,
    AppRoutingModule,
    EntryModule,
    SettingsModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
