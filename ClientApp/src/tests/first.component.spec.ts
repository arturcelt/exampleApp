import { TestBed, ComponentFixture, async} from "@angular/core/testing";
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
      declarations: [FirstComponent],
      providers: [{ provide: Model, useValue: mockRepository }]
    });

    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(FirstComponent);
      component = fixture.componentInstance;
      debugElement = fixture.debugElement;
      divElement = debugElement.children[0].nativeElement;
    });
    

  }));

  it("Implementacja danych wyjściowych", () => {
    let highlighted: boolean;
    component.change.subscribe(value => highlighted = value);
    debugElement.triggerEventHandler("mouseenter", new Event("mouseenter"));
    expect(highlighted).toBeTruthy();
    debugElement.triggerEventHandler("mouseleave", new Event("mouseleave"));
    expect(highlighted).toBeFalsy();

  });
  
});
