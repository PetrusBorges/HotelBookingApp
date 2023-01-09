// Types Express
import { Request, Response } from 'express';

// Model
import { Category } from '../../app/models/category';

export async function createCategory(req: Request, res: Response) {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Please name is required' });
    }

    const category = await Category.create({ name });

    res.status(201).json(category);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}
