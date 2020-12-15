import { Component } from "@angular/core";
import { Product } from "../model/product.model";
import { Model } from "../model/repository.model";

@Component({
  selector: "first",
  template: `<div class="bg-primary p-a-1">
Mamy
<span class="strong">{{getProducts().length}}</span>
Produktów.
</div>
`
})
export class FirstComponent {
  constructor(private repository: Model) { }

  category: string = "Piłka nożna";

  getProducts(): Product[] {
    return this.repository.getProducts().filter(p => p.category == this.category);
  }

}
