function roundIt(n){
  let split = n.toString();
  let wholeNum = split.split('.')[0];
  let decNum = split.split('.')[1];
​
  if(wholeNum.length < decNum.length){
    return Math.ceil(parseFloat(split))
  }
  else if(wholeNum.length > decNum.length){
    return Math.floor(parseFloat(split))
  }
  else{
    return Math.round(parseFloat(split))
  }
  
  
}