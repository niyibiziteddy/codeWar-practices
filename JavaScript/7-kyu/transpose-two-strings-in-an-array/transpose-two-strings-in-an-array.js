function transposeTwoStrings(array) {
    let n = array[0].length >= array[1].length ? array[0].length : array[1].length
    let str = ""
    let b = '\n'
    for(let i =0; i<n;i++){
        str+=`${!array[0][i] ? ' ' : array[0][i] } ${!array[1][i] ? ' ' : array[1][i]}${i === n-1? '' : b}`
    }
  return str
}