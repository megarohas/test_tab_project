export function getRandomString() {
  let result_string = "";
  let allow_chars = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < 10; i++)
    result_string += allow_chars.charAt(
      Math.floor(Math.random() * allow_chars.length)
    );
  return result_string;
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

var waiting = false;

export function debounce(callback, limit) {
  return function () {
    if (!waiting) {
      callback.apply(this, arguments);
      waiting = true;
      setTimeout(function () {
        waiting = false;
      }, limit);
    }
  };
}
