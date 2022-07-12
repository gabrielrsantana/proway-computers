import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho } from '../produtos';
//import { FormsModule } from '@angular/forms'; 
@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
   total=0;
  itensCarrinho: IProdutoCarrinho[] =[];

  constructor(public carrinhoService: CarrinhoService) { }

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
  }
removerProdutoCarrinho(produtoId: number){
  this.itensCarrinho = this.itensCarrinho.filter( item => item.id !== produtoId );
  this.carrinhoService.removerProdutoCarrinho(produtoId);
}
calculartotal(){
  this.total = this.itensCarrinho.reduce((prev,curr)=> prev+(curr.preco * curr.quantidade),0)

}

}
