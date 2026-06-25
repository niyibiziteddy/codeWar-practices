function twiceAsOld(dadYearsOld, sonYearsOld) {
  let sonTwice = sonYearsOld * 2
  let decending = dadYearsOld;
  let accending = dadYearsOld;
  let count = 0;
  while(true){
    if( decending === sonTwice)break;
    if(accending === sonTwice)break;
    decending--;
    accending ++;
    count ++;
  }
  return count;
}