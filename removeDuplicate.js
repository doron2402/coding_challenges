/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) {
        return 0;
    }
    const m = new Map();
    let k = 0;

    for (let i = 0; i < nums.length; i++) {
        if (!m.has(nums[i])) {
            nums[k] = nums[i];
            m.set(nums[i]);
            k++;
        }
    }

    return k;
};

const removeDuplicates2 = function(nums) {
    let left = 1;
    for(let i = 1; i < nums.length; i++ ){
        if(nums[i] !== nums[i-1]){
            nums[left] = nums[i];
            left++;
        }
    }
    return left;
}

console.log(removeDuplicates( [0,0,1,1,1,2,2,3,3,4]));