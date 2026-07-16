function toNato(words) {
  console.log(words)
    let letters = words.split(' ').join('').split('')
    let res = letters.map(item => {
      if(![',','.','!','?'].includes(item)){
        return NATO[item.toUpperCase()]
      }
      else if([',','.','!','?'].includes(item)){
        return ""+ item
      }
    })
    console.log(res.join(' '))
    return res.join(' ');
}