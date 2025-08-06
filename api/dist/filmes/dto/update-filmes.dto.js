"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFilmeDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_filmes_dto_1 = require("./create-filmes.dto");
class UpdateFilmeDto extends (0, swagger_1.PartialType)(create_filmes_dto_1.CreateFilmeDto) {
}
exports.UpdateFilmeDto = UpdateFilmeDto;
//# sourceMappingURL=update-filmes.dto.js.map