import Mongoose, { Schema, Document } from 'mongoose';

export interface ICharacter extends Document {
  name: string;
}

const CharacterSchema = new Schema({
  name: { type: String, required: true },
});

export default Mongoose.model<ICharacter>('characters', CharacterSchema);
