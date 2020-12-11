"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var table_component_1 = require("./core/table.component");
var form_component_1 = require("./core/form.component");
var notFoundComponent_1 = require("./core/notFoundComponent");
var model_resolver_1 = require("./model/model.resolver");
var unsaved_guard_1 = require("./core/unsaved.guard");
var routes = [
    { path: "form/:mode/:id", component: form_component_1.FormComponent, resolve: { model: model_resolver_1.ModelResolver }, canDeactivate: [unsaved_guard_1.UnsavedGuard] },
    { path: "form/:mode", component: form_component_1.FormComponent, resolve: { model: model_resolver_1.ModelResolver }, },
    { path: "table", component: table_component_1.TableComponent },
    { path: "table/:category", component: table_component_1.TableComponent },
    { path: "", redirectTo: "/table", pathMatch: "full" },
    { path: "**", component: notFoundComponent_1.NotFoundComponent }
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routing.js.map