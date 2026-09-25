function prime(num) {
  let arr = []
  let count = 1
  for(let i = 2;i <= num;i++){
      count = 1
    for(let j = 2;j<=i;j++){
      if(i !== j && i%j === 0){
        count ++
        
      }
    }
    if(count === 1){
        arr.push(i)
      }
  }
  return arr
}
​