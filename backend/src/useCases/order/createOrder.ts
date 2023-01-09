// Types Express
import { Request, Response } from 'express';

// Model
import { Order } from '../../app/models/order';

// SocketIO
import { io } from '../..';

export async function createOrder(req: Request, res: Response) {
  try {
    const { name, initialDate, finalDate, chosenHotel } = req.body;

    const order = await Order.create({
      name,
      initialDate,
      finalDate,
      chosenHotel,
    });

    const orderDetails = await order.populate('chosenHotel.hotel');

    io.emit('order@new', orderDetails);
    res.status(201).json(order);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}
