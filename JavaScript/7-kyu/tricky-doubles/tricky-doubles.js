function trickyDoubles(n){
   let num = String(n);
  let x = num.length / 2;
  if(num.length%2 === 0){
    if(num.slice(x) === num.slice(0,x)){
      return n
    }
    else{
      return n*2;
    }
  }
  else{
      return n*2;
    }
}