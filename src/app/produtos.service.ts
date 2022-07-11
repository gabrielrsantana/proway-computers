import { Injectable } from '@angular/core';
import { IProduto,produtos } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
produtos: IProduto[] = produtos;

  constructor() { }

  getAll(){
    return this.produtos;
  }

  getOne(produtoId:number){
    console.log("entrou em getOne(id)");
    return this.produtos.find(produto => produto.id === produtoId);
  }
}
