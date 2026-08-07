function split(string,mask) {
  if(string){
    let smask = mask.reduce((a,c)=> a+c,0)
      if(smask === string.length){
        let str = string.split('')
       return mask.map(item => str.splice(0,item).join(''))
      }
      else return null
    }
  else if(!string && mask.length>0) return null
  else return []
}