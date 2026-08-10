function splitByValue(k, elements) {
  let sNum = elements.filter(item => item < k)
  let bNum = elements.filter(item => item >= k)
  return [...sNum,...bNum]
}