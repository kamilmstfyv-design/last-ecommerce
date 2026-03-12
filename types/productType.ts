export interface Product {
  _id: string;
  userId: string;
  name: string;
  description: string;
  price: number;
  offerPrice: number;
  image: string[]; // Images are stored as an array
  category:
    | "Earphone"
    | "Headphone"
    | "Smartphone"
    | "Accessories"
    | "Camera"
    | "Laptop"; // Categories are fixed, so we use a union
  date: number;
  __v: number;
}
