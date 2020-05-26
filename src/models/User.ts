import Mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  portfolioSiteUrl: string;
  email: string;
  password: string;
  profession: string;
}

const UserSchema = new Schema({
  name: { type: String, required: true },
  portfolioSiteUrl: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profession: { type: String, required: true },
});

export default Mongoose.models.User || Mongoose.model<IUser>('User', UserSchema);
