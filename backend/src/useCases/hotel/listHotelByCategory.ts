// Types Express
import { Request, Response } from 'express';

// Model
import { Hotel } from '../../app/models/hotel';

export async function listHotelByCategory(req: Request, res: Response) {
  try {
    const { categoryId } = req.params;

    const hotel = await Hotel.find().where('category').equals(categoryId);

    res.json(hotel);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}
