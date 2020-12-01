import { Routes, RouterModule } from "@angular/router";
import { TableComponent } from "./core/table.component";
import { FormComponent } from "./core/form.component";
import { NotFoundComponent } from "./core/notFoundComponent";

const routes: Routes = [
  { path: "form/:mode/:id", component: FormComponent },
  { path: "form/:mode", component: FormComponent },
  { path: "nie", redirectTo: "/form/create", pathMatch: "prefix" },
  { path: "table", component: TableComponent },
  { path: "", redirectTo: "/table", pathMatch: "full"},
  { path: "", component: TableComponent },
  { path: "**", component: NotFoundComponent}
]

export const routing = RouterModule.forRoot(routes);
