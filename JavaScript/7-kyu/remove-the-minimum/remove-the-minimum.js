function removeSmallest(numbers) {
  let snum = [...numbers].sort((a,b) => a-b)[0]
  let nArr = [...numbers]
  let count = numbers.filter(item => item === snum).length
  nArr.splice(numbers.indexOf(snum),1)
  return nArr
}