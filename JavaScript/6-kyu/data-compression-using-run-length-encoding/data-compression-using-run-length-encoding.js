const encode = (input) => {
  let count = 1;
  let nArray = [];
  for(let i = 0; i<input.length;i++){
    if(input[i] === input[i+1]){
      count++
    }
    else{
      nArray.push(`${count}${input[i]}`)
      count = 1
    }
  }
  return nArray.join('')
}
​
const decode = (input) => {
  let sArr = []
  let tArr = []
  for(let i = 0;i<input.length;i++){
    if(!Number.isNaN(Number(input[i]))){
      sArr.push(`${input[i]}`)
    }
    else{
      sArr.push(`${input[i]}`)
      tArr.push(`${sArr.join('')}`)
      sArr = [];
    }
  }
  let res = tArr.map(item => {
    let x = item.split('').slice(0,-1).join('')
    let y = item.split('').splice(-1,1).join('')
    return y.repeat(x)
  })
  return res.join('')
  
}