"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var table_component_1 = require("./core/table.component");
var form_component_1 = require("./core/form.component");
var routes = [
    { path: "form/:mode", component: form_component_1.FormComponent },
    { path: "", component: table_component_1.TableComponent }
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routing.js.map