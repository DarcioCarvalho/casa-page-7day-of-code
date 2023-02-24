import { ChangeEvent, useEffect, useState } from 'react';
import { useGetProductsAPI } from '../../hooks/useGetProductsAPI';
import { Product } from '../../types/product';
import { LabelValue, ProductList, ValuesRange } from '../ProductsList';

export function OursPlants() {
  const [products, setProducts] = useState<Product[]>([]);
  const [sortBy, setSortBy] = useState("default");
  const [priceRange, setPriceRange] = useState<ValuesRange>({ minimal: undefined, maximum: undefined });
  const sortType: LabelValue[] = [
    {
      label: 'preço',
      value: 'price'
    },
    {
      label: 'nome',
      value: 'name'
    }
  ]

  useEffect(() => {
    useGetProductsAPI()
      .then(response => setProducts(response));

  }, []);

  function sortProducts(event: ChangeEvent<HTMLSelectElement>) {
    setSortBy(event.target.value);
  }

  const sortedProducts = products.map(product => product)
    .filter(product => {
      return sortBy === "price" ?
        (!priceRange.minimal || product.price >= Number(priceRange.minimal)) &&
        (!priceRange.maximum || product.price <= Number(priceRange.maximum)) :
        true;
    })
    .sort((a, b) => {
      return sortBy === "default" ? 0 :
        sortBy === "price" ?
          a.price - b.price : a.name.localeCompare(b.name);
    })

  return (
    <ProductList
      products={sortedProducts}
      title="Nossas plantas"
      sortBy={sortType}
      onSort={sortProducts}
      toActivedRange={sortBy === "price"}
      valuesRange={priceRange}
      setValuesRange={setPriceRange}
    />

  );
}