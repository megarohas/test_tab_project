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

//debounce block below

let debounce_waiting_flag = false;

export function debounce(callback, timeout) {
  return function () {
    if (!debounce_waiting_flag) {
      callback();
      debounce_waiting_flag = true;
      setTimeout(function () {
        debounce_waiting_flag = false;
      }, timeout);
    }
  };
}
