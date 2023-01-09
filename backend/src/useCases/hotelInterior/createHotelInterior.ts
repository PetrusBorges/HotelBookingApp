// Types Express
import { Request, Response } from 'express';

// Model
import { HotelInterior } from '../../app/models/hotelInterior';

export async function createHotelInterior(req: Request, res: Response) {
  try {
    const imagePath = req.file?.filename;
    const { hotel } = req.body;

    const hotelInterior = await HotelInterior.create({
      imagePath,
      hotel,
    });

    res.status(201).json(hotelInterior);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}
