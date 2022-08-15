import mongoose, { Schema } from "mongoose";

export var RestaurantSchema = new Schema({
    name: {
        type: String,
      },
      img: {
        type: String,
      },
      rating: {
        type: Number,
      },
      chefRef: {
        type: mongoose.Schema.Types.ObjectId,
      },
      active: {
        type: Boolean,
      },
      popular: {
        type: Boolean,
      },
      signatureDish: {
        type: mongoose.Schema.Types.ObjectId,
      }
}, { versionKey: false });