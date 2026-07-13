function reverseMessage(str) {
  if(str){
    let revString = str.split(" ").reverse()
    let newArray = revString.map(item => {
      let revItem = item.toLowerCase().split('').reverse();
      if(['!','#',',','>'].includes(revItem[0])){
        return revItem.join('');
      }
      else{
        revItem[0] = revItem[0].toUpperCase()
        return revItem.join('')
      }
    })
    return newArray.join(' ')
  }
  else{
    return ''
  }
  
}