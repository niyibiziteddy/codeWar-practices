function sortList(sortBy, list) {
    let keyList = list.map(el => Object.keys(el))
    if(keyList.length > 0 && keyList[0].includes(sortBy)){
      let sorted = [...list].sort((a,b)=> b[sortBy] - a[sortBy])
      return (sorted)
    }
    else return []
    
}