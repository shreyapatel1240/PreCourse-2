// Time Complexity : O(log n)
// Space Complexity : O(log n)
// Did this code successfully run on Leetcode : Yes
// Any problem you faced while coding this : No
class BinarySearch {
    // Returns index of x if it is present in arr[l.. r], else return -1
    binarySearch(arr, l, r, x) {
        if (l > r) return -1

        const mid = Math.floor((l + r) / 2)
        if (arr[mid] === x) return mid
        if (arr[mid] < x) {
            return this.binarySearch(arr, mid + 1, r, x)
        } else {
            return this.binarySearch(arr, l, mid - 1, x)
        }
    }
}
// Driver method to test above
const ob = new BinarySearch()
const arr = [2, 3, 4, 10, 40]
const n = arr.length
const x = 10
const result = ob.binarySearch(arr, 0, n - 1, x)
if (result === -1)
    console.log("Element not present");
else
    console.log("Element found at index " + result)