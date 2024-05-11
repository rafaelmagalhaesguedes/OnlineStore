export type ProductType = {
  id: number;
  name: string;
  brand: string;
  price: number;
  priceId: string;
  description: string;
  image: string;
  quantity?: number | undefined;
};