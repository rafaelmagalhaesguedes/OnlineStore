import { ProductType } from "../types/ProductType";

const productsArray: ProductType[] = [
  {
    id: "price_1PDR0VGl8SYs9Zeb8njkL6BL",
    name: "Xiomi Redmi Note 10 Pro",
    price: 300.99,
    image: "https://http2.mlstatic.com/D_NQ_NP_633982-MLA46168332992_052021-O.webp"
  },
  {
    id: "price_1PDRSIGl8SYs9Zeb0Cd0FeTI",
    name: "Iphone 12 Pro Max",
    price: 599.99,
    image: "https://http2.mlstatic.com/D_NQ_NP_760492-MLU69496071589_052023-O.webp"
  },
  {
    id: "price_1PDR05Gl8SYs9ZebgUTbavi3",
    name: "Samsung Galaxy S21 Ultra",
    price: 399.99,
    image: "https://http2.mlstatic.com/D_NQ_NP_950192-MLA74242183335_012024-O.webp"
  }
];

function getProductData(id: string) {
  const productData = productsArray.find(product => product.id === id);

  if (productData == undefined) {
    console.log("Product data does not exist for ID: " + id);
    return undefined;
  }

  return productData;
}

export { productsArray, getProductData };