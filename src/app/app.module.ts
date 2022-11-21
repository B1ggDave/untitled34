import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FishComponent} from './fishtest.component';

@NgModule({
  declarations: [
    FishComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [FishComponent]
})
export class AppModule { }
