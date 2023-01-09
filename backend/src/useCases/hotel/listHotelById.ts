// Types Express
import { Request, Response } from 'express';

// Model
import { Hotel } from '../../app/models/hotel';

export async function listHotelById(req: Request, res: Response) {
  try {
    const { hotelId } = req.params;

    const hotel = await Hotel.findById(hotelId);

    res.json(hotel);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}
