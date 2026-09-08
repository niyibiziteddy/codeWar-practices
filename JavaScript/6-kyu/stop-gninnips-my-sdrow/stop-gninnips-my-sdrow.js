function spinWords(string){
  return string.split(' ').map(item => item.length>=5 ? item.split('').reverse().join('') : item
  ).join(' ')
}