/**
 * Fib - using recursive
 */
const fib = (n) => {
    if (n <= 2) {
        return 1;
    }
    return fib(n-1) + fib(n-2);
}

/**
 * Fib with memozation
 */
const fibWithMem = (n, mem = {}) => {
    
    if (n in mem) return mem[n];
    
    if (n <= 2)  return 1;

    mem[n] = fibWithMem(n-1, mem) + fibWithMem(n-2, mem);

    return mem[n];
}

let res = 0;
console.time('fibWithMem');
res = fibWithMem(30)
console.timeEnd('fibWithMem', res);

console.time('fib');
res = fib(30)
console.timeEnd('fib', res);

console.log('You can see how much faster fib with memo compare to fib without using memo');