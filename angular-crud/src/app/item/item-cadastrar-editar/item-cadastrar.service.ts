import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { ItemService } from "../item.service";
import { of } from "rxjs";
import { Item } from "../item.module";

@Injectable({
    providedIn: "root",
})
export class ItemCadastrarService implements Resolve<Item> {
    constructor(private itemService: ItemService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params["id"];
        if (id) {
            return this.itemService.pesquisarPorId(id);
        }
        return of({} as Item);
    }
}
