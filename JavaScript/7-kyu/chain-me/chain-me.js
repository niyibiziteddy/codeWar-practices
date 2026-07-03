function chain(input, fs) {
  if(fs.length === 1){
    return fs[0](input)
  }
  else if(fs.length > 1){
    let result= fs[0](input);
    for(let i = 1; i < fs.length; i++){
      result = fs[i](result)
    }
    return result
  }
  else{
    return input;
  }
}