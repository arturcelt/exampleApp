"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Message = /** @class */ (function () {
    function Message(text, error, responses) {
        if (error === void 0) { error = false; }
        this.text = text;
        this.error = error;
        this.responses = responses;
    }
    return Message;
}());
exports.Message = Message;
//# sourceMappingURL=message.model.js.map