import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID } from '@angular/core';
import { NgModule } from '@angular/core';
import { ModelModule } from "./model/model.module";
import { CoreModule } from "./core/core.module";
import { TableComponent } from "./core/table.component";
import { FormComponent } from "./core/form.component";
import { MessageModule } from "./messages/message.module";
import { MessageComponent } from "./messages/message.component";
import { routing } from "./app.routing";
import { AppComponent } from "./app.component";
import { TermsGuard } from "./terms.guard";
import { LoadGuard } from "./load.guard";

import { registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl';
registerLocaleData(localePl);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [BrowserModule, ModelModule, CoreModule, MessageModule, routing],
  providers: [ TermsGuard, LoadGuard, {provide: LOCALE_ID, useValue: "pl-PL"}],
  bootstrap: [AppComponent]
})
export class AppModule { }

