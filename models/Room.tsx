// {
//       id: 6,
//     photos: ""
//     number: "203",
//     building: "HC",
//     capacity: 15,
//     type: { code: "pc", name: "PC Lab" },
//   },

import {model, Model, models, Schema, Types} from "mongoose";

// 1. Create an interface representing a document in MongoDB.

interface TypeInterface {
  code: string;
  name: string;
}

// ? are optional fields
export interface RoomInterface {
  _id?: string;
  photos?: Types.Array<string>;
  building: string;
  number: string;
  capacity: number;
  notes?: string;
  type: TypeInterface;
}
// 2. Create a Schema corresponding to the document interface.
const roomSchema = new Schema<RoomInterface, Model<RoomInterface>>({
  photos: {type: [String]},
  building: {type: String, required: true},
  number: {type: String, required: true},
  capacity: {type: Number, required: true},
  notes: {type: String},
  type: {
    code: {type: String, required: true},
    name: {type: String, requires: true},
  },
});
// 3. Create a Model.
export default (models.Room as Model<RoomInterface>) ||
  model<RoomInterface>("Room", roomSchema);
