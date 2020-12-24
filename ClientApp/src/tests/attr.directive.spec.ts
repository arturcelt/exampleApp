import { TestBed, ComponentFixture } from "@angular/core/testing";
import { Component, DebugElement, ViewChild } from "@angular/core";
import { By } from "@angular/platform-browser";
import { PaAttrDirective } from "../app/ondemand/attr.directive";

@Component({
  template: `<div><span [pa-attr]="className">Test</span></div>`
})
class TestComponent {
  className: string = "initialClass";
  @ViewChild(PaAttrDirective)
  attrDirective: PaAttrDirective;
}

describe("PaAttrDirective", () => {
  let fixture: ComponentFixture<TestComponent>;
  let directive: PaAttrDirective;
  let spanElement: HTMLSpanElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, PaAttrDirective]
    });

    fixture = TestBed.createComponent(TestComponent);
    directive = fixture.componentInstance.attrDirective;
    spanElement = fixture.debugElement.query(By.css("span")).nativeElement;
  });


  it("Wygenerowanie prawidłowej liczby elementów", () => {
    fixture.detectChanges();
    expect(directive.bgClass).toBe("initialClass");
    expect(spanElement.className).toBe("initialClass");

    fixture.componentInstance.className = "nextClass";
    fixture.detectChanges();
    expect(directive.bgClass).toBe("nextClass");
    expect(spanElement.className).toBe("nextClass");
  });
});
