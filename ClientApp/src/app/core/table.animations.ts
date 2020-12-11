import { trigger, style, state, transition, animate } from "@angular/core";


export const HighlightTrigger = trigger("rowHighlight", [
  state("selected", style({
    backgroundColor: "lightgreen",
    fontSize: "20px"
  })),
  state("notselected", style({
    backgroundColor: "lightsalmon",
    fontSize: "12px"
  })),
  state("void", style({ opacity: 0 })),
  transition("* => notselected", animate("200ms")),
  transition("* => void",  animate("1000ms")),
  transition("void => *", [style({ opacity: 0 }), animate("1500ms")]),
  transition("* => selected", animate("1000ms ease-in"))
]);
