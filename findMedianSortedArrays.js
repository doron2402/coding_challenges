// Median of Two Sorted Arrays

const findMedianSortedArrays = function(nums1, nums2) {
    let i=0;
    let j=0;

    while (i < nums1.length || j < nums2.length) {
        if (Number.isInteger(nums1[i]) && Number.isInteger(nums1[i]) && nums1[i] >= nums2[j]) {
            // insert nums2[j] before nums1[i]
            nums1.splice(i, 0, nums2[j]);
            j++;
        } else if (Number.isInteger(nums1[i]) && Number.isInteger(nums2[j]) && nums1[i] < nums2[j]) {
           i++;
        } else if (!Number.isInteger(nums1[i]) && Number.isInteger(nums2[j])) {
            nums1.push(nums2[j])
            j++;
        } else if (!Number.isInteger(nums2[j]) && Number.isInteger(nums1[i])) {
            break;
        }
    }
    
    if (nums1.length % 2 === 0) {
        return (nums1[Math.floor((nums1.length-1)/2)] + nums1[(nums1.length)/2])/2; 
    }
    return nums1[Math.floor(nums1.length/2)];
};

const findMedianSortedArrays2 = function(nums1, nums2) {
    let num = (nums1.concat(nums2))
    num.sort((a,b) => a-b);
    const mid = num.length/2;
    if (mid == Number(mid.toFixed())) {
        return (num[mid] + num[mid-1])/2; 
    }
    return num[Number(mid.toFixed())-1];
}