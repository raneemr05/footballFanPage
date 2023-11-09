import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FanPageComponent } from './components/fan-page/fan-page.component';
import { FanItemComponent } from './components/fan-item/fan-item.component';

@NgModule({
  declarations: [
    AppComponent,
    FanPageComponent,
    FanItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
