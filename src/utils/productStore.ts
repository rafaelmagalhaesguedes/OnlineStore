import { ProductType } from "../types/ProductType";

const productsArray: ProductType[] = [
  {
    id: "1",
    title: "Xiomi Redmi Note 10 Pro",
    price: 300.99,
    image: "https://via.placeholder.com/150"
  },
  {
    id: "2",
    title: "Iphone 12 Pro Max",
    price: 599.99,
    image: "https://via.placeholder.com/150"
  },
  {
    id: "3",
    title: "Samsung Galaxy S21 Ultra",
    price: 399.99,
    image: "https://via.placeholder.com/150"
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