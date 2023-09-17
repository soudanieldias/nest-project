"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailAlreadyExistsException = void 0;
const common_1 = require("@nestjs/common");
class EmailAlreadyExistsException extends common_1.HttpException {
    constructor(email) {
        super(`User with email ${email} already exists`, common_1.HttpStatus.CONFLICT);
    }
}
exports.EmailAlreadyExistsException = EmailAlreadyExistsException;
//# sourceMappingURL=emailExists.exception.js.map