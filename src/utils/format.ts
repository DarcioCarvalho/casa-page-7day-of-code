import { getValidFloatValue } from "./stringUtils";

export const { format: formatPrice } = new Intl.NumberFormat('pt-br', {
  style: 'currency',
  currency: 'BRL'
});

export const { format: formatDecimal } = new Intl.NumberFormat('pt-br', {
  style: 'decimal'
});

export function formatDecimalFractionDigits(value: number, fractionDigits: number): string {
  const { format } = new Intl.NumberFormat('pt-br', {
    style: 'decimal',
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits
  });
  return format(value);
}

export function getNumberFormatBrToEn(value: string | undefined): string | undefined {
  const newValue = value ? getValidFloatValue(value) : value;
  return newValue ? newValue.replace(",", ".") : value;
}
