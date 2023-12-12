// Given an integer array nums, find three numbers whose product is maximum and return the maximum product.
package main

import (
  "fmt"
  "sort"
)

func maxProduct(nums []int) int {
  sort.Ints(nums)
  n := len(nums)
  return max(nums[0]*nums[1]*nums[n-1], nums[n-1]*nums[n-2]*nums[n-3])
}

func max(a, b int) int {
  if a > b {
    return a
  }
  return b
}

func main() {
  nums := []int{1, 3, 5, 2, 8}
  fmt.Println(maxProduct(nums)) // Output: 120
}