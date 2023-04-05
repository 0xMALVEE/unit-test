function stringLength(str){
  if(str.length >= 1 && str.length <= 10){
    return str.length;
  }else{
    throw new Error("String must not be longer than 10 characters");
  } 
}

module.exports = stringLength