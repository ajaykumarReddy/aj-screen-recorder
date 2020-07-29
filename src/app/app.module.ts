import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AjScreenRecoderModule } from 'aj-screen-recoder';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AjScreenRecoderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
