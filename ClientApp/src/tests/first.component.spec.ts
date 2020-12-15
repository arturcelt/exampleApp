import { TestBed, ComponentFixture } from "@angular/core/testing";
import { FirstComponent } from "../app/ondemand/first.component";
import { Product } from "../app/model/product.model";
import { Model } from "../app/model/repository.model";

describe("FirstComponent", () => {
  let fixture: ComponentFixture<FirstComponent>;
  let component: FirstComponent;

  let mockRepository = {
    getProducts: function () {
      return [
        new Product(1, "test1", "Piłka nożna", 100),
        new Product(2, "test2", "Szachy", 100),
        new Product(3, "test3", "Piłka nożna", 100)
      ]
    }
  };



  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstComponent],
      providers: [{ provide: Model, useValue: mockRepository }]
    });
    fixture = TestBed.createComponent(FirstComponent);
    component = fixture.componentInstance;

  });
  it("Sprawdzenie czy komponent jest zdefiniowany", () => {
    expect(component).toBeDefined()
  })

  it("Filtrowanie kategorii", () => {
    component.category = "Szachy";
    expect(component.getProducts().length).toBe(1);
    component.category = "Piłka nożna";
    expect(component.getProducts().length).toBe(2);
    component.category = "Bieganie";
    expect(component.getProducts().length).toBe(0);
  })
});
