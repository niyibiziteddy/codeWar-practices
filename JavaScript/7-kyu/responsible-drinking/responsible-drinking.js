function hydrate(s) {
  let num = s.split(' ').filter(item => Number.isFinite(Number(item))).reduce((acc, cur) => Number(acc) + Number(cur));
  return num > 1 ? num + ' glasses of water' : num + ' glass of water';
}