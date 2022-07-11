import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduto } from 'src/app/produtos';
import { ProdutosService } from 'src/app/produtos.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {

  produto: IProduto | undefined;
  quantidade =1;
  
  //injetando o servico de produtos..no
  //e serviço de rota para ver os detalhes do produto
  constructor(private produtosService: ProdutosService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    //traz todos os parametros
    const routeParams = this.route.snapshot.paramMap;
    
    const produtoId = Number(routeParams.get("id"));
    console.log("produto ID = "+produtoId);
    //converte a string para numero,quando pega da rota vem como string
    this.produto = this.produtosService.getOne(produtoId);
    console.log(this.produto);
  }

} 
