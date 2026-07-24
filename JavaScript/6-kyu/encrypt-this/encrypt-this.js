var encryptThis = function(text) {
  let spl = text.split(' ')
  let nArr = []
  spl.forEach(item => {
      let result = item.split('').map((e,i,a) => i === 0 ? a.join('').charCodeAt(0) : i === 1 ? a[item.length - 1] : i === item.length - 1 ? a[1] : e)
      nArr.push(result.join(''));
  })
  return nArr.join(' ')
}