/**
 * 
 * Grid Traveler - Dyanmic programming question
 * - The traveler can travel only to the right or the bottom.
 *  [ S ] [   ] [   ]
 *  [   ] [   ] [   ]
 *  [   ] [   ] [ D ]
 * @param {Int} x 
 * @param {Int} y 
 * @param {Object} memo 
 * @returns 
 */

const grid_travler = (x, y, memo = {}) => {
    const key = `${x}_${y}`;
    if (memo && memo[key]) {
        return memo[key];
    }
    if (x <= 0 || y <= 0) return 0;
    if (x === 1 || y === 1) return 1;
    
    const result = grid_travler(x-1, y, memo) + grid_travler(x, y-1, memo);
    memo[key] = result;
    return memo[key];
};

console.time('grid_travler')
console.log(grid_travler(10, 10, {}));
console.timeEnd('grid_travler');