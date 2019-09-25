module.exports = function check(str, bracketsConfig) {
  if (str.length%2!=0) {
      return false;
  }
  else{
      let str_arr = str.split('');
      for (let i = 0; i < str_arr.length; i++) {
          for (let j = 0; j < bracketsConfig.length; j++) {
            if (str_arr[i]===bracketsConfig[j][0] && str_arr[i+1]===bracketsConfig[j][1]) {
              str_arr.splice(i,2);
              i=0;
              j=-1;
            }
          }
      }
      if (str_arr.length===0) {
        return true      
      }
      else{
        return false
      }
   }
}
