import { ChangeEventHandler, Dispatch, LegacyRef, SetStateAction, useRef, useState } from 'react';
import { Product } from '../../types/product';
import { formatDecimal, getNumberFormatBrToEn } from '../../utils/format';
import { getValidFloatValue } from '../../utils/stringUtils';
import { CaretRight } from '../CaretRight';
import { InputValueRange } from './InputValueRange';
import { ProductCard } from './ProductCard';

import styles from './productsList.module.css';

export interface LabelValue {
  label: string;
  value: string;
}

export interface ValuesRange {
  minimal: string | undefined;
  maximum: string | undefined;
}

interface ProductListProps {
  products: Product[];
  title: string;
  subtitle?: string;
  id?: string;
  sortBy?: LabelValue[] | null;
  onSort?: ChangeEventHandler<HTMLSelectElement>;
  toActivedRange?: boolean;
  valuesRange?: ValuesRange;
  setValuesRange?: Dispatch<SetStateAction<ValuesRange>>; /* ValuesRange | null; */
}

const initialValuesRange = { minimal: undefined, maximum: undefined };

export function ProductList({ products, title, subtitle = "", id = "", sortBy = null, onSort, toActivedRange = false, valuesRange = initialValuesRange, setValuesRange }: ProductListProps) {
  const [errorMessage, setErrorMessage] = useState("");
  const [basicValuesRange, setBasicValuesRange] = useState<ValuesRange>(valuesRange);
  const inputMaximumRef = useRef<HTMLInputElement>(null);

  function resetValueRange() {
    setBasicValuesRange(initialValuesRange);
    setValuesRange &&
      setValuesRange(initialValuesRange);
    setErrorMessage("");
  }

  function handleButton() {
    if (basicValuesRange.maximum && basicValuesRange.minimal &&
      basicValuesRange.maximum < basicValuesRange.minimal) {
      setErrorMessage("Máximo não pode ser menor que o mínimo!");
      console.log("inputMaximumRef: ", inputMaximumRef);
      inputMaximumRef.current?.focus();
      return
    }

    errorMessage &&
      setErrorMessage("");

    setValuesRange &&
      setValuesRange({
        minimal: getNumberFormatBrToEn(basicValuesRange.minimal),
        maximum: getNumberFormatBrToEn(basicValuesRange.maximum),
      });
  }

  return (
    <div id={id} className={styles.productsList}>
      <div className={styles.heading}>
        {subtitle &&
          <span>{subtitle}</span>}
        <h1>{title}</h1>
      </div>

      {sortBy &&
        <nav className={styles.navBar}>
          <div className={`${styles.sort} ${toActivedRange ? styles.sort__range : styles.sort__default}`}>
            <label>Ordenar por:</label>
            <select
              id="sortBy"
              onChange={(e) => {
                toActivedRange &&
                  resetValueRange();
                onSort &&
                  onSort(e);
              }}
            >
              <option value="default">padrão</option>

              {sortBy.sort((a, b) => a.label.localeCompare(b.label))
                .map(item => <option key={item.value} value={item.value}>{item.label}</option>)}

            </select>
          </div>

          {toActivedRange && setValuesRange &&
            <div className={styles.range}>
              <InputValueRange
                valuesRange={basicValuesRange}
                setValuesRange={setBasicValuesRange}
                fieldNameValuesRange="minimal"
                placeholder="Mínimo"
              />
              <span>-</span>
              <InputValueRange
                ref={inputMaximumRef}
                valuesRange={basicValuesRange}
                setValuesRange={setBasicValuesRange}
                fieldNameValuesRange="maximum"
                placeholder="Máximo"
              />

              <button
                onClick={() => handleButton()}
              >
                <CaretRight />
              </button>
            </div>}

        </nav>
      }

      {errorMessage &&
        <span className={styles.error}>
          {errorMessage}
        </span>}

      <div className={styles.products}>

        {products.filter(product => product.ordem > 0)
          .map((product, index) =>
            <ProductCard
              key={index}
              name={product.name}
              price={product.price}
              urlImage={`/assets/products/${product.img}.png`}
            />
          )}

      </div>

    </div>
  );
}