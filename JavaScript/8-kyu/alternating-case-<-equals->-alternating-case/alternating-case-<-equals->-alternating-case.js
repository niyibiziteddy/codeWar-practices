String.prototype.toAlternatingCase = function () {
  let splitted = this.split('');
  return (splitted.map( item => item.toUpperCase() === item ? item.toLowerCase() : item.toUpperCase())).join('')
}