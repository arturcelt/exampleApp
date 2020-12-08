import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OndemandComponent } from "./ondemand.component";
import { NgModel } from "@angular/forms";

@NgModule({
  imports: [CommonModule],
  declarations: [OndemandComponent],
  exports: [OndemandComponent]
})
export class OndemandModule {

}

