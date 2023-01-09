// PathNode
import path from 'node:path';

// Multer
import multer from 'multer';

// Multer = uploadImage
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    }
  })
});

// useCases
import { listCategory } from './useCases/category/listCategory';
import { createCategory } from './useCases/category/createCategory';
import { deleteCategory } from './useCases/category/deleteCategory';
import { listHotel } from './useCases/hotel/listHotel';
import { createHotel } from './useCases/hotel/createHotel';
import { deleteHotel } from './useCases/hotel/deleteHotel';
import { listHotelById } from './useCases/hotel/listHotelById';
import { listHotelByCategory } from './useCases/hotel/listHotelByCategory';
import { listInteriorByHotel } from './useCases/hotelInterior/listInteriorByHotel';
import { createHotelInterior } from './useCases/hotelInterior/createHotelInterior';
import { listOrder } from './useCases/order/listOrder';
import { createOrder } from './useCases/order/createOrder';
import { deleteOrder } from './useCases/order/deleteOrder';
import { changeOrderStatus } from './useCases/order/changeOrderStatus';

// Router
import { Router } from 'express';

export const router = Router();

// List Category
router.get('/category', listCategory);

// Create Category
router.post('/category', createCategory);

// Delete Category
router.delete('/category/:categoryId', deleteCategory);

// List Hotel
router.get('/hotel', listHotel);

// Create Hotel
router.post('/hotel', upload.single('image'), createHotel);

// List Hotel By Id
router.get('/hotel/:hotelId', listHotelById);

// List Hotel By Category
router.get('/category/:categoryId/hotel', listHotelByCategory);

// Delete Hotel
router.delete('/hotel/:hotelId', deleteHotel);

// List Hotel Interior
router.get('/hotel/:hotelId/interior', listInteriorByHotel);

// Create Hotel Interior
router.post('/interior', upload.single('image'), createHotelInterior);

// List Order
router.get('/order', listOrder);

// Create Order
router.post('/order', createOrder);

// Delete Order
router.delete('/order/:orderId', deleteOrder);

// Changte Order Status
router.patch('/order/:orderId', changeOrderStatus);
