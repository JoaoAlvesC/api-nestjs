import { Controller, Get, Param, Post, Body, Put, Delete } from "@nestjs/common";

@Controller('produtos')
export class ProdutosController {

    @Get()
    obterTodos(): string{
        return 'Lista todos os produtos'
    }

    @Get(':id')
    obterUm(@Param() params): string{
        return `Retorna os dados do produto ${params.id}`
    }

    @Post()
    criar(@Body() produto): string {
        console.log(produto)
        return 'Produto criado'
    }

    @Put()
    alterar(@Body() produto): string {
        console.log(produto)
        return 'Produto alterado'
    }

    @Delete(':id')
    apagar(@Param() params): string {
        return `Apaga o produto de id ${params.id}`
    }
}