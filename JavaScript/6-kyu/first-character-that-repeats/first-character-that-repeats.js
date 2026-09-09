function firstDup(string) {
    for(let str of string){
      if((string.split('').filter(e => e === str).length) > 1) return str
    }
}