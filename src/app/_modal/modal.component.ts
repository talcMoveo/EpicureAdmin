import { Component, ViewEncapsulation, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { Chef } from '../models/chef.model';
import { Dish } from '../models/dish.model';
import { Restaurant } from '../models/restaurant.model';

import { ModalService } from './modal.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({ 
    selector: 'jw-modal', 
    templateUrl: 'modal.component.html', 
    styleUrls: ['modal.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit, OnDestroy {
    @Input() id!: string;
    item!: Chef | Restaurant | Dish;
    keys!: string[];
    boolKeys!: string[];
    private element: any;
    modalForm = {} as FormGroup;

    constructor(private modalService: ModalService, private el: ElementRef, private formBuilder: FormBuilder) {
        this.element = el.nativeElement;
    }

    ngOnInit(): void {
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }

        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        document.body.appendChild(this.element);

        // close modal on background click
        this.element.addEventListener('click', (el: any) => {
            if (el.target.className === 'jw-modal') {
                this.close();
            }
        });

        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.modalService.add(this);
    }

    // remove self from modal service when component is destroyed
    ngOnDestroy(): void {
        this.modalService.remove(this.id);
        this.element.remove();
    }

    // open modal
    open(item: Chef | Restaurant | Dish, keys: string[]): void {
        this.item = item;
        this.keys = keys;
        this.element.style.display = 'block';
        document.body.classList.add('jw-modal-open');
    }

    // close modal
    close(): void {
        this.element.style.display = 'none';
        document.body.classList.remove('jw-modal-open');
    }
}