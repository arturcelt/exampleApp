import { Routes, RouterModule } from "@angular/router";
import { TableComponent } from "./core/table.component";
import { FormComponent } from "./core/form.component";

const routes: Routes = [
  { path: "form/edit", component: FormComponent },
  { path: "form/create", component: FormComponent },
  { path: "", component: TableComponent}
]

export const routing = RouterModule.forRoot(routes);