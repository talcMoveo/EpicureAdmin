import mongoose, { Schema } from "mongoose";

export var DishSchema = new Schema({
    name: {
        type: String,
      },
      price: {
        type: Number,
      },
      ingredients: {
        type: Array,
        items: {
          type: String,
        },
      },
      tags: {
        type: Array,
        items: {
          type: String,
        },
      },
      img: {
        type: String,
      },
      restaurantRef: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "restaurants",
      },
      active: {
        type: Boolean,
        default: true,
      },
}, { versionKey: false });
