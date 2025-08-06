"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilmeController = void 0;
const common_1 = require("@nestjs/common");
const filmes_service_1 = require("./filmes.service");
const create_filmes_dto_1 = require("./dto/create-filmes.dto");
const update_filmes_dto_1 = require("./dto/update-filmes.dto");
const swagger_1 = require("@nestjs/swagger");
const filme_entity_1 = require("./entities/filme.entity");
let FilmeController = class FilmeController {
    filmeService;
    constructor(filmeService) {
        this.filmeService = filmeService;
    }
    create(dto) {
        return this.filmeService.create(dto);
    }
    findAll() {
        return this.filmeService.findAll();
    }
    findOne(id) {
        return this.filmeService.findOne(+id);
    }
    update(id, dto) {
        return this.filmeService.update(+id, dto);
    }
    remove(id) {
        return this.filmeService.remove(+id);
    }
};
exports.FilmeController = FilmeController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Criar um novo filme' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: filme_entity_1.Filme }),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Conflito: Filme já existe.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Erro interno do servidor.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_filmes_dto_1.CreateFilmeDto]),
    __metadata("design:returntype", void 0)
], FilmeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todos os filmes' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [filme_entity_1.Filme] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FilmeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar um filme por ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: filme_entity_1.Filme }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FilmeController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar um filme' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: filme_entity_1.Filme }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_filmes_dto_1.UpdateFilmeDto]),
    __metadata("design:returntype", void 0)
], FilmeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Remover um filme' }),
    (0, swagger_1.ApiResponse)({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FilmeController.prototype, "remove", null);
exports.FilmeController = FilmeController = __decorate([
    (0, swagger_1.ApiTags)('Filmes'),
    (0, common_1.Controller)('filme'),
    __metadata("design:paramtypes", [filmes_service_1.FilmeService])
], FilmeController);
//# sourceMappingURL=filmes.controller.js.map