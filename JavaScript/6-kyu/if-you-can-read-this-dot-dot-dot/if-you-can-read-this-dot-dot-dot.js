function toNato(words) {
    let letters = words.split(' ').join('').split('')
   return letters.map(item => [',','.','!','?'].includes(item) ?  ""+ item : NATO[item.toUpperCase()]).join(' ')
}