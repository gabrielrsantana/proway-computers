import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificacaoService } from 'src/app/notificacao.service';
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
  constructor(private produtosService: ProdutosService, private route: ActivatedRoute,
    private notificacaoService: NotificacaoService) { }

  ngOnInit(): void {
    //traz todos os parametros
    const routeParams = this.route.snapshot.paramMap;
    const produtoId = Number(routeParams.get("id"));
    //converte a string para numero,quando pega da rota vem como string
    this.produto = this.produtosService.getOne(produtoId);
  }
  adicionarAoCarinho(){
this.notificacaoService.notificar("O produto foi adicionado ao carrinho.")
  }

} 
