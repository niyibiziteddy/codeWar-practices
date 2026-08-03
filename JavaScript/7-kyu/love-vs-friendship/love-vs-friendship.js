function wordsToMarks(string){
  const a = 'abcdefghijklmnopqrstuvwxyz'
  return string.split('').map(item => a.indexOf(item)+1).reduce((a,c) => a+c)
}