function nerdify(txt){
  console.log(txt)
  let arr = [{letter:'a',num:'4'}, {letter:'A',num:'4'}, {letter:'e',num:'3'},{letter:'E',num:'3'},{letter:'l',num:'1'}]
  const redu = (acc,cur) =>{
    let {letter, num} = cur;
    return acc.replaceAll(letter,num)
  } 
  return  arr.reduce(redu,txt)
}