function rotations(dieArray){
  let arr = dieArray
  let count = [];
  arr.forEach(item => {
    let temp = 0
    for(let i = 0; i<arr.length;i++){
      if(item !== arr[i]){
        if((item === 1 && arr[i] === 6) ||( item === 2 && arr[i] === 5) ||( item === 3 && arr[i] === 4)){
          temp+=2   
        }
        else if((item === 6 && arr[i] === 1) ||( item === 5 && arr[i] === 2) ||( item === 4 && arr[i] === 3)){
          temp+=2   
        }
        else{
          temp++
        }
      }
    }
    count.push(temp)
  })
      console.log(count)
  return count.length > 0 ? Math.min(...count): 0;
}