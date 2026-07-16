function left$( str, i ) {
  console.log('left ' + str + '  ' + i)
  if(i === 0){
    return ''
  }
  else if (typeof i === 'undefined'){
    return str[0]
  }
  else if(i > str.length){
    return str
  }
  else if(typeof str === 'string' && str.includes(i)){
    x = str.indexOf(i)
    return str.slice(0,x)
  }
  else{
    return str.slice(0,i)
  }
}
​
function right$( str, i ){
  console.log('right ' + str + '  ' + i)
    if(i === 0){
    return ''
  }
  else if (typeof i === 'undefined'){
    return str.at(-1)
  }
  else if(i > str.length){
    return str
  }
  else if(typeof str === 'string' && str.includes(i)){
   x = str.split('').reverse().indexOf(i)
    y = str.split(' ').reverse().join(' ')
    console.log('answer ' + str.split(' ').reverse().join(' ').slice(0,y.indexOf(i)))
    return str.split(' ').reverse().join(' ').slice(0,y.indexOf(i)).trim()
  }
  else{
    x = str.split('').reverse().slice(0,i)
    return x.reverse().join('')
  }
}
​