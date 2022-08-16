import { Restaurant } from "./restaurant.model";

export class Dish {
    _id!: number;
    name!: string;
    price!: number;
    ingredients!: string[];
    tags!: string[];
    img!: string;
    restaurantRef!: Restaurant;
    active!: boolean;
}