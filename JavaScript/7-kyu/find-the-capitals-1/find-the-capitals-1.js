var capitals = function (word) {
  let newArr = []
  for(let i = 0;i<word.length;i++){
    if(word[i] === word[i].toUpperCase()){
      newArr.push(i)
    }
  }
  return newArr;
};