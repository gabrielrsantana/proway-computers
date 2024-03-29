import { Component, OnInit } from '@angular/core';
import { produtos, IProduto } from '../produtos';
import { ProdutosService } from '../produtos.service';



@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
//produtos é o vetor dos produtos
//iProduto é a interface
produtos: IProduto[] | undefined; 

  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {
    this.produtos = this.produtosService.getAll();
    console.log("tamanho produtos="+this.produtos.length);
  }

}
