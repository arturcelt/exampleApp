import { Component, HostListener, EventEmitter, Input } from "@angular/core";
import { Product } from "../model/product.model";
import { Model } from "../model/repository.model";
import { RestDataSource } from "../model/rest.datasource";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "first",
  moduleId: module.id,
  templateUrl: "first.component.html"

})
export class FirstComponent {
  _category: string = "Piłka nożna";
  _products: Product[] = [];
  highlighted: boolean = false;
  instance: FirstComponent;



  constructor(public datasource: RestDataSource) { this.instance = this; }

  ngOnInit() {
    this.updateData();
  }

    getProducts(): Product[] {
      return this._products;
  }

  set category(newValue: string) {
    this._category = newValue;
    this.updateData();
  }

  updateData() {
    this.datasource.getData().subscribe(data => this._products = data.filter(p => p.category == this._category));
    
  }


 }


