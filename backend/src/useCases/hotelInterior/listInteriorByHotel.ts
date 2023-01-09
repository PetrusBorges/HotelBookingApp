// Types Express
import { Request, Response } from 'express';

// Model
import { HotelInterior } from '../../app/models/hotelInterior';

export async function listInteriorByHotel(req: Request, res: Response) {
  try {
    const { hotelId } = req.params;

    const hotel = await HotelInterior.find().where('hotel').equals(hotelId);

    res.json(hotel);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}
