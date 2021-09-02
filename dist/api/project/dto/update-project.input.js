"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProjectInput = void 0;
const create_project_input_1 = require("./create-project.input");
const mapped_types_1 = require("@nestjs/mapped-types");
class UpdateProjectInput extends (0, mapped_types_1.PartialType)(create_project_input_1.CreateProjectInput) {
}
exports.UpdateProjectInput = UpdateProjectInput;
//# sourceMappingURL=update-project.input.js.map