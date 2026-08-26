function likes(names) {
  let str = 'like this';
  let len = names.length
  if(names.length === 0) return 'no one likes this'
  switch(len){
      case 1:
        return `${names[0]} likes this`
        break;
      case 2:
        return `${names[0]} and ${names[1]} ${str}`
        break;
      case 3:
        return `${names[0]}, ${names[1]} and ${names[2]} ${str}`
        break;
      default:
        console.log(len)
        return `${names[0]}, ${names[1]} and ${len-2} others ${str}`
  }
}