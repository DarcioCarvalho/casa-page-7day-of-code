import { useEffect, useState } from 'react';
import { useGetProductsAPI } from '../../hooks/useGetProductsAPI';
import { Product } from '../../types/product';
import { ProductList } from '../ProductsList';

import { existsObjectArray, getRadomArrayItem } from '../../utils/arrayUtils';

export function Offers() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    useGetProductsAPI()
      .then(response => {
        const randomProducts: Product[] = [];
        for (let index = 0; index < 8; index++) {
          const product = getRadomArrayItem<Product>(response);

          !existsObjectArray(randomProducts, product) &&
            randomProducts.push(product);
        }

        setProducts(randomProducts);

      });
  }, [])

  return (
    <ProductList
      id="offers"
      products={products}
      title="ofertas"
      subtitle="Conheça nossas"
    />
  );
}