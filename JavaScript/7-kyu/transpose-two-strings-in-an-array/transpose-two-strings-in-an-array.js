function transposeTwoStrings(array) {
    let n = array[0].length >= array[1].length ? array[0].length : array[1].length
    let str = ""
    let x = ' '
    let e = ''
    let b = '\n'
    for(let i =0; i<n;i++){
        str+=`${typeof array[0][i] !== 'string' ? ' ' : array[0][i] } ${typeof array[1][i] !== 'string' ? ' ' : array[1][i]}${i === n-1? '' : b}`
    }
  return str
}