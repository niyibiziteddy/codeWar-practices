function freqSeq(str, sep) {
  return str.split('').map(item => str.split('').filter(el => el === item).length).join(sep);
}
​