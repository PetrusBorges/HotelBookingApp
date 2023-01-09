// Types Express
import { Request, Response } from 'express';

// Model
import { Order } from '../../app/models/order';

export async function listOrder(req: Request, res: Response) {
  try {
    const orders = await Order.find()
      .sort({ createAt: 1})
      .populate('chosenHotel.hotel');

    res.json(orders);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}
