// Types Express
import { Request, Response } from 'express';

// Model
import { Hotel } from '../../app/models/hotel';

export async function createHotel(req: Request, res: Response) {
  try {
    const imagePath = req.file?.filename;
    const { name, description, price, review, category } = req.body;

    const hotel = await Hotel.create({
      name,
      description,
      imagePath,
      price: Number(price),
      review: Number(review),
      category,
    });

    res.status(201).json(hotel);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}
