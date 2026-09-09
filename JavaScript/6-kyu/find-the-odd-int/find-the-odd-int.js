const findOdd = (A) =>{
  for(let a of A){
    if((A.filter(e => e === a).length) % 2 !== 0) return a
  }
}