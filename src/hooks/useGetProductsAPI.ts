import axios from "axios";
import { Product } from "../types/product";

//https://gist.githubusercontent.com/DarcioCarvalho/009035b7536d3f79eeea35b1792e063c/raw
//https://gist.githubusercontent.com/bugan/41d60ffa23fa0c4044cc138bf670780d/raw

export async function useGetProductsAPI(): Promise<Product[]> {
  const products: Product[] = [];
  await axios.get('https://gist.githubusercontent.com/DarcioCarvalho/009035b7536d3f79eeea35b1792e063c/raw')
    .then(response => response.data)
    .then(data => products.push(...data))

  return products;
}