import { Component, KeyValueDiffer, KeyValueDiffers, ChangeDetectorRef } from "@angular/core";
import { Model } from "../model/repository.model";

@Component({
  selector: "paProductCount",
  template: `<div class="bg-info p-a-1">Liczba produktów: {{count}}.</div>`
})
export class ProductCountComponent {
  private differ: KeyValueDiffer<any, any>;
  count: number = 0;

  constructor(private model: Model, private keyValueDifers: KeyValueDiffers, private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
    this.differ = this.keyValueDifers
      .find(this.model.getProducts())
      .create();
  }

  ngDoCheck() {
    if (this.differ.diff(this.model.getProducts()) != null) {
      this.updateCount();
    }
  }

  private updateCount() {
    this.count = this.model.getProducts().length;
  }

}

