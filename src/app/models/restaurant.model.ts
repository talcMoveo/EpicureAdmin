import { Chef } from "./chef.model";
import { Dish } from "./dish.model";

export class Restaurant {
    _id!: number;
    name!: string;
    img!: string;
    rating!: number;
    chefRef!: Chef;
    active!: boolean;
    popular!: boolean;
    signatureDish!: Dish;
}