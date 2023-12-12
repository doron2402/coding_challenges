/**
 * 
 * @param {Number} targetSum 
 * @param {Array[Number]} numbers 
 */
const canSum = (targetSum, numbers) => {
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;
    for (let num of numbers) {
        const reminder = targetSum - num;
        if (canSum(reminder, numbers) === true) {
            return true;
        }
    }   

    return false;
}

console.log(canSum(5,[2,2,5]))


/**
 * 
 * With Memo
 * @param {Number} targetSum 
 * @param {Array[Number]} numbers 
 */
const canSumWithMemo = (targetSum, numbers, memo = {}) => {
    if (memo[targetSum]) {
        return memo[targetSum];
    }
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;
    for (let num of numbers) {
        const reminder = targetSum - num;
        meom[targetSum] = canSum(reminder, numbers);
        if (meom[targetSum] === true) {
            return true;
        }
    }   

    return false;
}

console.log(canSum(5,[2,2,5]))