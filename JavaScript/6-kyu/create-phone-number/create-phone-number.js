function createPhoneNumber(numbers){
  return [0,3,6,10].map((el,i,ar) => numbers.slice(el,ar[i+1]).join('')).map((e,i) => (
    i===0? `(${e}) `: i===1?`${e}-`:e
  )).slice(0,-1).join('')
}