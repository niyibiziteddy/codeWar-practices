function take(arr, n) {
  return arr.length === 0 || n === 0 ? [] : arr.slice(0,n);
}