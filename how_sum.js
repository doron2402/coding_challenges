/**
 * @param {number} target
 * @param {Array[Number]} numbers
 * @returns {Array[Number]}
 */
const howSum = (target, numbers) => {
    if (target === 0) return [];
    if (target < 0) return null;

    for (let num of numbers) {
        const reminder = target-num;
        const res = howSum(reminder, numbers);
        if (res !== null) {
            return [...res, num];
        }
    }

    return null;
}