import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarrinhoService } from 'src/app/carrinho.service';
import { NotificacaoService } from 'src/app/notificacao.service';
import { IProduto, IProdutoCarrinho } from 'src/app/produtos';
import { ProdutosService } from 'src/app/produtos.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {

  produto: IProduto | undefined;
  quantidade = 1;

  //injetando o servico de produtos..no
  //e serviço de rota para ver os detalhes do produto
  constructor(private produtosService: ProdutosService, private route: ActivatedRoute,
    private notificacaoService: NotificacaoService,
    private carrinhoService: CarrinhoService) { }

  ngOnInit(): void {
    //traz todos os parametros
    const routeParams = this.route.snapshot.paramMap;
    const produtoId = Number(routeParams.get("id"));
    //converte a string para numero,quando pega da rota vem como string
    this.produto = this.produtosService.getOne(produtoId);
  }
  adicionarAoCarinho() {
    this.notificacaoService.notificar("O produto foi adicionado ao carrinho.");
    //criando produto antes de adicionar
    //adiciona o que ja tem em produto ( os ...)e o que falta
    //a ! diz que existe o produto, ao contrario de ?, que pode nao existir
    const produto: IProdutoCarrinho = {
      ...this.produto!,
      quantidade: this.quantidade

    }

    this.carrinhoService.adicionarAocarrinho(produto);



  } 
  
}