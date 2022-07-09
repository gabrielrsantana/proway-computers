import { Component, OnInit } from '@angular/core';
import { produtos, IProduto } from '../produtos';



@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
//produtos é o vetor dos produtos
//iProduto é a interface
produtos: IProduto[] = produtos;

  constructor() { }

  ngOnInit(): void {
  }

}
