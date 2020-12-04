import { NgModule } from "@angular/core";
import { Model } from "./repository.model";
import { HttpModule, JsonpModule } from "@angular/http";
import { RestDataSource, REST_URL } from "./rest.datasource";
import { ModelResolver } from "./model.resolver";

@NgModule({
  imports: [HttpModule, JsonpModule],
  providers: [Model, RestDataSource, ModelResolver,
    { provide: REST_URL, useValue: `http://${location.hostname}:19626/api/Product` }]
})
export class ModelModule {

}
