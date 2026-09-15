const rot13 = (message) => {
  const alf = "abcdefghijklmnopqrstuvwxyz"
  let test = message.split('').map(item => {
    if(item.toLowerCase() === item && alf.includes(item)){
      return alf.at(alf.indexOf(item) - 13)
    }else if(item.toLowerCase() !== item && alf.includes(item.toLowerCase())){
      return alf.at(alf.indexOf(item.toLowerCase()) - 13).toUpperCase()
    }
    else return item
  }).join('')
  return test
}