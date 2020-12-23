import { TestBed, ComponentFixture, async} from "@angular/core/testing";
import { FirstComponent } from "../app/ondemand/first.component";
import { Product } from "../app/model/product.model";
import { Model } from "../app/model/repository.model";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { Component, ViewChild } from "@angular/core";


@Component({
  template: `<first [pa-model]="model"></first>`
})
class TestComponent {
  constructor(public model: Model) { }

  @ViewChild(FirstComponent)
  FirstComponent: FirstComponent;

}

describe("FirstComponent", () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: FirstComponent;
  let debugElement: DebugElement;
  let bindingElement: HTMLSpanElement;
  let divElement: HTMLDivElement;

  let mockRepository = {
    getProducts: function () {
      return [
        new Product(1, "test1", "Piłka nożna", 100),
        new Product(2, "test2", "Szachy", 100),
        new Product(3, "test3", "Piłka nożna", 100)
      ]
    }
  };



  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FirstComponent, TestComponent],
      providers: [{ provide: Model, useValue: mockRepository }]
    });

    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      component = fixture.componentInstance.FirstComponent;
      debugElement = fixture.debugElement.query(By.directive(FirstComponent));
    });
    

  }));

  it("Otrzymanie modelu za pomocą właściwości danych wejściowych", () => {
    component.category = "Szachy";
    fixture.detectChanges();
    let products = mockRepository.getProducts().filter(p => p.category == component.category);
    let componentProducts = component.getProducts();
    for (let i = 0; i < componentProducts.length; i++) {
      expect(componentProducts[i]).toEqual(products[i]);
    }
    expect(debugElement.query(By.css("span")).nativeElement.textContent).toContain(products.length);
  });
  
});
