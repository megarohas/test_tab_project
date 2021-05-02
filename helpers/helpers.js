import { v4 } from "uuid";

export function getRandomString() {
  return v4().substring(0, 10);
}
export function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}

export function removeRandomItem(array) {
  let result_array = [];
  let index_for_remove = getRandomIndex(array.length);
  for (let i = 0; i < array.length; i++) {
    if (i != index_for_remove) result_array.push(array[i]);
  }
  return [...result_array];
}
