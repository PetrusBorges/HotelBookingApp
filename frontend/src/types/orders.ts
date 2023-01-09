export interface Order {
  _id: string;
  name: string;
  initialDate: string;
  finalDate: string;
  chosenHotel: {
    hotel: {
      _id: string;
      name: string;
      description: string;
      imagePath: string;
      price: number;
      review: number;
    };
    quantity: number;
    _id: string;
  }[];
  status: 'WAITING' | 'IS_HAPPENING' | 'DONE';
}

