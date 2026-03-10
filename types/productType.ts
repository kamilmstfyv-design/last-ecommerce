export interface Product {
  _id: string;
  userId: string;
  name: string;
  description: string;
  price: number;
  offerPrice: number;
  image: string[]; // Şəkillər massiv olduğu üçün
  category:
    | "Earphone"
    | "Headphone"
    | "Smartphone"
    | "Accessories"
    | "Camera"
    | "Laptop"; // Kateqoriyalar sabitdirsə bu şəkildə yaza bilərsən
  date: number;
  __v: number;
}
