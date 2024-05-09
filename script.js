// recursively outputs fibonacci numbers until number is reached
function fibonacci(number, loops = 0, numArr = []) {
  if (loops === 0) {
    numArr.push(0);
    return fibonacci(number, loops + 1, numArr);
  } else if (loops === 1) {
    numArr.push(1);
    return fibonacci(number, loops + 1, numArr);
  } else if (number === loops) {
    return numArr;
  }

  numArr.push(numArr[loops - 2] + numArr[loops - 1]);
  return fibonacci(number, loops + 1, numArr);
}

console.log(fibonacci(27));
