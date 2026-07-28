function toWeirdCase(string){
  let newArr = [];
  string.split(' ').forEach(item => {
    let temp = item.split('').map((el,i) => i%2 === 0? el.toUpperCase() : el.toLowerCase() )
    newArr.push(temp.join(''))
  })
  return newArr.join(' ')
}