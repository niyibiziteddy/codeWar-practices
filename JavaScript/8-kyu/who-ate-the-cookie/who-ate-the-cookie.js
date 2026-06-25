function cookie(x){
  let type = (((Object.prototype.toString.call(x)).split(' '))[1])
  let newType = ((type.split('')).slice(0,-1)).join('')
  return newType === 'String' ? "Who ate the last cookie? It was Zach!": newType === "Number"? "Who ate the last cookie? It was Monica!":"Who ate the last cookie? It was the dog!"
}