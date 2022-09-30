import { Injectable } from "@nestjs/common";
import { Produto } from "src/Models/produtos.model";

@Injectable()
export class ProdutosService {
    produtos: Produto[] = [
        new Produto("LIV01", "Livro 1", 29.90),
        new Produto("LIV02", "Livro 2", 23.90),
        new Produto("LIV03", "Livro 3", 39.90)
    ]

    obterTodos(): Produto[] {
        return this.produtos;
    }

    obterUm(id: number): Produto {
        return this.produtos[id];
    }

    criar(produto: Produto) {
        this.produtos.push(produto);
    }

    alterar(produto: Produto): Produto {
        return produto;
    }

    apagar(id: number) {
        this.produtos.pop();
    }

}