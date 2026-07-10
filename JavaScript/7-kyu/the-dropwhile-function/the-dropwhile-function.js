function dropWhile(array, predicate) {
  for(let i = 0; i<array.length;i++){
    if(predicate(array[i]) === false){
      return array.slice(i, array.length)
    }
  }
    return [];
}