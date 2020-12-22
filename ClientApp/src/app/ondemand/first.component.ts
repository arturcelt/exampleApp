import { Component, HostListener, EventEmitter } from "@angular/core";
import { Product } from "../model/product.model";
import { Model } from "../model/repository.model";

@Component({
  selector: "first",
  moduleId: module.id,
  templateUrl: "first.component.html"

})
export class FirstComponent {
  constructor(private repository: Model) { }

  category: string = "Piłka nożna";
  highlighted: boolean = false;

  @Output("pa-highlight")
  change = new EventEmitter<boolean>();


  getProducts(): Product[] {
    return this.repository.getProducts().filter(p => p.category == this.category);
  }

  @HostListener("mouseenter", ["$event.type"])
  @HostListener("mouseleave", ["$event.type"])
  setHighlight(type: string) {
    this.highlighted = type == "mouseenter";
    this.change.emit(this.highlighted);
  }

}
