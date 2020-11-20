import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID } from '@angular/core';
import { NgModule } from '@angular/core';
import { ModelModule } from "./model/model.module";
import { CoreModule } from "./core/core.module";
import { TableComponent } from "./core/table.component";
import { FormComponent } from "./core/form.component";
import { MessageModule } from "./messages/message.module";
import { MessageComponent } from "./messages/message.component";

import { registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl';
registerLocaleData(localePl);


@NgModule({
  declarations: [
    
  ],
  imports: [BrowserModule, ModelModule, CoreModule, MessageModule],
  providers: [{provide: LOCALE_ID, useValue: "pl-PL"}],
  bootstrap: [TableComponent, FormComponent, MessageComponent]
})
export class AppModule { }






//@NgModule({
//  declarations: [

//  ],
//  imports: [
//    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' })
//  ],
//  providers: [],
//  bootstrap: []
//})
//export class AppModule { }
