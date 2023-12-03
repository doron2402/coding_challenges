#
# Question: Write a code to merge overlapping intervals. 
#

function mergeOverlappingIntervals(intervals) {
  if (intervals.length <= 1) {
    return intervals;
  }

  // Sort intervals based on the start value
  intervals.sort((a, b) => a[0] - b[0]);

  // settings `mergedIntervals` arrray
  const mergedIntervals = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const currentInterval = intervals[i];
    const lastMergedInterval = mergedIntervals[mergedIntervals.length - 1];

    if (currentInterval[0] <= lastMergedInterval[1]) {
      // Merge overlapping intervals
      lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
    } else {
      // Add non-overlapping interval to the result
      mergedIntervals.push(currentInterval);
    }
  }

  return mergedIntervals;
}

// Example usage:
const inputIntervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
const resultIntervals = mergeOverlappingIntervals(inputIntervals);
console.log(resultIntervals); // Output: [[1, 6], [8, 10], [15, 18]]
