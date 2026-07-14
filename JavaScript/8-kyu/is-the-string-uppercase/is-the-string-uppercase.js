String.prototype.isUpperCase = function() {
  let str = this.split('')
  for(let item of str){
    if( item !== ' ' && item.toUpperCase() !== item){
      return false
    }
  }
  return true
}