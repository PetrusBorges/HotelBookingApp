// Data base mongoose
import { model, Schema } from 'mongoose';

export const Order = model('Order', new Schema({
  name: {
    type: String,
    required: true,
  },
  initialDate: {
    type: String,
    required: true,
  },
  finalDate: {
    type: String,
    required: true,
  },
  chosenHotel: {
    required: true,
    type: [{
      hotel: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Hotel',
      },
      quantity: {
        type: Number,
        default: 1,
      }
    }]
  },
  status: {
    type: String,
    enum: ['WAITING', 'IS_HAPPENING', 'DONE'],
    default: 'WAITING',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
}));
