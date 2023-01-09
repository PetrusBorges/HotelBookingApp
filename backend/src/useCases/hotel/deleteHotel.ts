// Types Express
import { Request, Response } from 'express';

// Model
import { Hotel } from '../../app/models/hotel';

export async function deleteHotel(req: Request, res: Response) {
  try {
    const { hotelId } = req.params;

    await Hotel.findByIdAndDelete(hotelId);

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}
