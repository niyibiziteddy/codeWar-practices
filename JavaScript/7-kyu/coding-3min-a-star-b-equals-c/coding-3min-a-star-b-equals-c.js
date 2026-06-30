function findAB(numbers,c){
  const numArray = []
  for(let i = 0; i < numbers.length; i++){
    for(let j = i+1; j< numbers.length; j++){
      if(numbers[i] * numbers[j] === c){
        return [numbers[i], numbers[j]]
      }
    }
  }
  return null;
}