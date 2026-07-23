function initializeNames(name){
  let names = name.split(' ')
  if(names.length > 2){
    let longName = names.slice(1,-1).map( item => item.slice(0,1)+'.' )
    return [names[0],...longName,names[names.length - 1]].join(' ')
  }
  else return name
}