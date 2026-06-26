function twoSort(s) {
  let theFirst = (s.sort())[0].split('')
  let newArray = (theFirst.slice(0,theFirst.length - 1)).map(item => item +'***')
  newArray.push(theFirst[theFirst.length - 1])
  return newArray.join('');
}