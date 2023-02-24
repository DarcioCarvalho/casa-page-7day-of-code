import { Product } from "../types/product";

export function getRadomArrayItem<T>(list: Array<T>): T {
  return list[Math.floor(Math.random() * list.length)];
}

export function existsObjectArray(list: Array<Object>, item: Object): boolean {
  return list.some(anotherItem =>
    Object.keys(anotherItem as object).every(key =>
      anotherItem[key as keyof Object] === item[key as keyof Object]
    ));
}