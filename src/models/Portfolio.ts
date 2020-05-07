import Mongoose, { Schema, Document } from 'mongoose';
import User, { IUser } from './User';

export interface IPortfolio extends Document {
  title: string;
  siteUrl: string;
  user: IUser | string;
}

const PortfolioSchema = new Schema({
  title: { type: String, required: true },
  siteUrl: { type: String, required: true, unique: true },
  user: {
    type: Schema.Types.ObjectId,
    ref: User,
  },
});

export default Mongoose.model<IPortfolio>('Portfolio', PortfolioSchema);
