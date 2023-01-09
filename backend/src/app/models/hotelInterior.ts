// Data base mongoose
import { model, Schema } from 'mongoose';

export const HotelInterior = model('HotelInterior', new Schema({
  imagePath: {
    type: String,
    required: true,
  },
  hotel: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Hotel'
  }
}));
