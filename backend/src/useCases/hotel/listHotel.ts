// Types Express
import { Request, Response } from 'express';

// Model
import { Hotel } from '../../app/models/hotel';

export async function listHotel(req: Request, res: Response) {
  try {
    const category = await Hotel.find();

    res.json(category);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}
