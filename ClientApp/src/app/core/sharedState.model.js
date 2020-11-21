"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MODES;
(function (MODES) {
    MODES[MODES["CREATE"] = 0] = "CREATE";
    MODES[MODES["EDIT"] = 1] = "EDIT";
})(MODES = exports.MODES || (exports.MODES = {}));
var SharedState = /** @class */ (function () {
    function SharedState(mode, id) {
        this.mode = mode;
        this.id = id;
    }
    return SharedState;
}());
exports.SharedState = SharedState;
exports.SHARED_STATE = new core_1.InjectionToken("shared_state");
//# sourceMappingURL=sharedState.model.js.map