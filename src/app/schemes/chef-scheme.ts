import { Schema } from "mongoose";

export var ChefSchema = new Schema({
    name: {
        type: String,
      },
      img: {
        type: String,
      },
      description: {
        type: String,
      },
      active: {
        type: Boolean,
      },
}, { versionKey: false });