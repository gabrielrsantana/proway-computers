import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens: IProdutoCarrinho[] = [];

  constructor() { }

  obtemCarrinho() {
    //salvar carrinho mesmo se sair da pagina
    this.itens = JSON.parse(localStorage.getItem("carrinho") || ""); //vem como string. O JSON.parse (@param text — A valid JSON string), faz com string,mas se nao tiver nada undefined, usa-se
    return this.itens;
  }
  adicionarAocarrinho(produto: IProdutoCarrinho) {
    this.itens.push(produto);
    //converte a string para JSON, porque metodo do carrinho pede chave valor
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }
  limparCarrinho() {
    this.itens = [];
    localStorage.clear();
  }


}
