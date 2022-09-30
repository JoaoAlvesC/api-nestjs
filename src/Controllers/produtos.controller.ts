import { Controller, Get, Param, Post, Body, Put, Delete } from "@nestjs/common";
import { Produto } from "src/Models/produtos.model";
import { ProdutosService } from "src/Services/produtos.service";

@Controller('produtos')
export class ProdutosController {

    constructor(private produtosService: ProdutosService) {

    }

    @Get()
    obterTodos(): Produto[]{
        return this.produtosService.obterTodos()
    }

    @Get(':id')
    obterUm(@Param() params): Produto{
        return this.produtosService.obterUm(params.id)
    }

    @Post()
    criar(@Body() produto: Produto): Produto {
        this.produtosService.criar(produto)
        return produto
    }

    @Put()
    alterar(@Body() produto: Produto): Produto {
        return this.produtosService.alterar(produto);
    }

    @Delete(':id')
    apagar(@Param() params){
        this.produtosService.apagar(params.id)
    }
}