import { TestBed, ComponentFixture, async} from "@angular/core/testing";
import { FirstComponent } from "../app/ondemand/first.component";
import { Product } from "../app/model/product.model";
import { Model } from "../app/model/repository.model";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { Component, ViewChild } from "@angular/core";
import { RestDataSource } from "../app/model/rest.datasource";
import { Observable, Subscribable } from "rxjs/Observable";
import "rxjs/add/observable/from";
import { Injectable } from "@angular/core";
import { Subscriber } from "rxjs/Subscriber";

@Injectable()
class MockDataSource {
   public data = [
    new Product(1, "test1", "Piłka nożna", 100),
    new Product(2, "test2", "Szachy", 100),
    new Product(3, "test3", "Piłka nożna", 100)
  ];

  public getData(): Observable<Product[]> {

    return new Observable<Product[]>((obs) => {
      setTimeout(this.timeOutHandler(obs), 10000);
    })
  }

  timeOutHandler(obs) {
    return obs.next(this.data);
  }
}

describe("FirstComponent", () => {
  let fixture: ComponentFixture<FirstComponent>;
  let component: FirstComponent;
  let dataSource = new MockDataSource();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FirstComponent],
      providers: [{ provide: RestDataSource, useValue: dataSource }]
    });

    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(FirstComponent);
      component = fixture.componentInstance;
    });
    

  }));

  it("Przeprowadzenie operacji asynchronicznej", () => {
    dataSource.data.push(new Product(100, "test100", "Piłka nożna", 100));
    component.category = "Piłka nożna";
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.getProducts().length).toBe(3);
    })
  });
  
});
