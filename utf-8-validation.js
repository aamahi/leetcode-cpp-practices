const validUtf8 = function(data) {
  let next;
  let arr = data.map((num) => {
    let bi = num.toString(2);
    if (bi.length === 8) return bi;
    else {
      while (bi.length !== 8) {
        bi = '0' + bi;
      }
      return bi;
    }
  });
  let len = arr.length;
  
  for (let i = 0; i < len; i++) {
    if (arr[i][0] === '0') continue;
    else {
      if (arr[i].slice(0,3) === '110') {
        next = 1;
        if (i + next >= len) return false;
        while (next) {
          next--;
          if (arr[++i].slice(0, 2) !== '10') return false;
        }
      } else if (arr[i].slice(0, 4) === '1110') {
        next = 2;
        if (i + next >= len) return false;
        while (next) {
          next--;
          if (arr[++i].slice(0, 2) !== '10') return false;
        }
      } else if (arr[i].slice(0,5) === '11110') {
        next = 3;
        if (i + next >= len) return false;
        while (next) {
          next--;
          if (arr[++i].slice(0, 2) !== '10') return false;
        }
      } else return false;
    }
  }
  
  return true;
};
