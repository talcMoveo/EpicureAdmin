import { Injectable } from '@angular/core';
import { Chef } from '../models/chef.model';
import { Dish } from '../models/dish.model';
import { Restaurant } from '../models/restaurant.model';

@Injectable({ providedIn: 'root' })
export class ModalService {
    private modals: any[] = [];

    add(modal: any) {
        // add modal to array of active modals
        this.modals.push(modal);
    }

    remove(id: string) {
        // remove modal from array of active modals
        this.modals = this.modals.filter(x => x.id !== id);
    }

    open(id: string, item: Chef | Restaurant | Dish) {
        // open modal specified by id
        const modal = this.modals.find(x => x.id === id);
        modal.open(item);
    }

    close(id: string) {
        // close modal specified by id
        const modal = this.modals.find(x => x.id === id);
        modal.close();
    }
}