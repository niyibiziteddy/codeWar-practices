function binRota(arr){
  let len = arr.length;
  let err = [...new Set(arr.map(el => el.length))].length
  let res;
  if(err === 1){
      res = arr.map((el,i) => {
      if(i%2 === 0) return el
      else return el.reverse()
    })
  }
  else return 'Test failed'
  return res.flat()
}