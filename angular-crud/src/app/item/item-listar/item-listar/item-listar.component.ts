import { ItemService } from './../../item.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../../item.module';

@Component({
  selector: 'app-item-listar',
  standalone: false,

  templateUrl: './item-listar.component.html',
  styleUrl: './item-listar.component.scss',
})
export class ItemListarComponent implements OnInit {
  itens$: Observable<Item[]> | undefined;
  colunasTabela = ['id', 'nome', 'cpf', 'whatsapp', 'editar'];
  element: any;
  constructor(private ItemService: ItemService) {}

  ngOnInit() {
    this.listarItens();
  }

  listarItens() {
    this.itens$ = this.ItemService.listar();
  }
}
