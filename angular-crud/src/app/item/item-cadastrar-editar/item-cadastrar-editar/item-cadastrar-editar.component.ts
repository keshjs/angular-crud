import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Item } from '../../item.module';
import { ItemService } from '../../item.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-item-cadastrar-editar',
  standalone: false,

  templateUrl: './item-cadastrar-editar.component.html',
  styleUrl: './item-cadastrar-editar.component.scss',
})
export class ItemCadastrarEditarComponent implements OnInit {
  formGroup!: UntypedFormGroup;
  item!: Item;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private itemService: ItemService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.item = this.activatedRoute.snapshot.data['item'];
    this.formGroup = this.formBuilder.group({
      id: [this.item && this.item.id ? this.item.id : null],
      nome: [
        this.item && this.item.nome ? this.item.nome : '',
        Validators.required,
      ],
      cpf: [
        this.item && this.item.cpf ? this.item.cpf : '',
        Validators.required,
      ],
      whatsapp: [
        this.item && this.item.whatsapp ? this.item.whatsapp : '',
        Validators.required,
      ],
    });
  }

  salvar() {
    if (this.item && this.item.id) {
      this.itemService.atualizar(this.formGroup.value).subscribe({
        next: (itemAtualizado) => {

          this.router.navigateByUrl('/itens');
        },
        error: (error) => {

        },
      });
    } else {
      this.itemService
        .cadastrar({
          nome: this.formGroup.value.nome,
          cpf: this.formGroup.value.cpf,
          whatsapp: this.formGroup.value.whatsapp,
        })
        .subscribe({
          next: (itemCadastrado) => {

            this.router.navigateByUrl('/itens');
          },
          error: (error) => {

          },
        });
    }
  }

  deletar() {
    this.itemService.deletar(this.item).subscribe({
      next: (response) => {

        this.router.navigateByUrl('/itens');
      },
      error: (error) => {

      },
    });
  }
}
