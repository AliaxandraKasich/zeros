module.exports = function getZerosCount(number) {
  var count5 = 0;

  var tempNumber5 = number;
  
  var temp = number;
  while(temp >= 1){
    temp = Math.trunc(tempNumber5/5);
    count5 = count5 + temp;
    tempNumber5 = tempNumber5/5;
  }
  return count5;
  
 
}
