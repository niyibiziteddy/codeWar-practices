dnaStrand = dna => {
  return dna.split('').map(item => {
    return item === 'A'? 'T': item === 'T'? 'A':item === 'G'? 'C': item === 'C'? 'G':'none'
  }).join('')
}