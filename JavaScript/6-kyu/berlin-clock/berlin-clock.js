function berlinClock(time) {
  console.log(Math.floor(4/5))
  let timeArr = time.split(":").map(item => Number(item))
  let round = timeArr[2]%2 === 0 ? 'Y' : 'O'
  let firstRow = ['0','0','0','0'].map((el,i,a) => {
    let R = Math.floor(timeArr[0]/5)
    return i < R ? 'R' : 'O';
  }).join('')
  let secondRow = ['0','0','0','0'].map((el,i,a) => {
    let R = timeArr[0]%5
    return i < R ? 'R' : 'O'
  }).join('')
  let count = Math.floor(timeArr[1]/5)
  let thirdRow = ['0','0','0','0','0','0','0','0','0','0','0'].map((el,i,a)=>{
    if(i < count){
     return [2,5,8,11].includes(i)? 'R' : 'Y'
    }
    else return 'O'
  }).join('')
  let forthRow = ['0','0','0','0'].map((el,i,a) => {
    let R = timeArr[1]%5
    return i < R ? 'Y': 'O'
  }).join('')
  return `${round}\n${firstRow}\n${secondRow}\n${thirdRow}\n${forthRow}`
  
}