function noRepeat(str) {  
let string = str.split('')
  for(let item of string){
    let x = string.filter(el => el === item)
    if(x.length === 1) return item
  }
}