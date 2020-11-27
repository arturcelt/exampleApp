import { NgModule } from "@angular/core";
import { Model } from "./repository.model";
import { HttpModule, JsonpModule } from "@angular/http";
import { RestDataSource, REST_URL } from "./rest.datasource";

@NgModule({
  imports: [HttpModule, JsonpModule],
  providers: [Model, RestDataSource,
    { provide: REST_URL, useValue: `http://${location.hostname}:19626/api/Product` }]
})
export class ModelModule {

}
