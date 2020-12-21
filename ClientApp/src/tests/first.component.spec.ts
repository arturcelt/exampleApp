import { TestBed, ComponentFixture } from "@angular/core/testing";
import { FirstComponent } from "../app/ondemand/first.component";
import { Product } from "../app/model/product.model";
import { Model } from "../app/model/repository.model";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

describe("FirstComponent", () => {
  let fixture: ComponentFixture<FirstComponent>;
  let component: FirstComponent;
  let debugElement: DebugElement;
  let bindingElement: HTMLSpanElement;

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
    debugElement = fixture.debugElement;
    bindingElement = debugElement.query(By.css("span")).nativeElement;

  });
  it("Sprawdzenie czy komponent jest zdefiniowany", () => {
    expect(component).toBeDefined()
  })

  it("Filtrowanie kategorii", () => {
    component.category = "Szachy";
    fixture.detectChanges();
    expect(component.getProducts().length).toBe(1);
    expect(bindingElement.textContent).toContain("1");

    component.category = "Piłka nożna";
    fixture.detectChanges();
    expect(component.getProducts().length).toBe(2);
    expect(bindingElement.textContent).toContain("2");

    component.category = "Bieganie";
    fixture.detectChanges();
    expect(component.getProducts().length).toBe(0);
    expect(bindingElement.textContent).toContain("0");
  })
});
