const sumFibonacci = (n) => {
  if (n <= 1 || typeof n !== 'number') {
    return 0;
  }
  const iter = (counter, acc, newNum) => {
    if (counter === 0) {
        return acc - 1
    }
    return iter(counter - 1, acc + newNum, newNum = acc)
  }
  return iter(n, 1, 0);
};

console.log(sumFibonacci(1)); // 0 (только первое число Фибоначчи)
console.log(sumFibonacci(2)); // 1 (0 + 1)
console.log(sumFibonacci(3)); // 2 (0 + 1 + 1)
console.log(sumFibonacci(4)); // 4 (0 + 1 + 1 + 2)
console.log(sumFibonacci(5)); // 7 (0 + 1 + 1 + 2 + 3)
console.log(sumFibonacci(-1)); // 0
console.log(sumFibonacci('abc')); // 0