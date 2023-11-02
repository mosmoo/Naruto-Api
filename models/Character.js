import mongoose from 'mongoose'

const Schema = mongoose.Schema

//DO NOT include id in Schema

let CharacterSchema = new Schema({
  name: { type: String },
  age: { type: String },
  village: { type: String },
  occupation: { type: String },
  jutsu: { type: Array }
});

export default mongoose.model("characters", CharacterSchema);