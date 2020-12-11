import { trigger, style, state, transition, animate } from "@angular/core";


export const HighlightTrigger = trigger("rowWhighlight", [
  state("selected", style({
    backgroundColor: "lightgreen",
    fontSize: "20px"
  })),
  state("notselected", style({
    backgroundColor: "lightsalmon",
    fontSize: "12px"
  })),
  transition("selected => notselected", animate("200ms")),
  transition("notselected => selected", animate("400ms"))
]);
