// Time Complexity : O(n log n)
// Space Complexity : O(n)
// Did this code successfully run on Leetcode : Yes
// Any problem you faced while coding this : Yes
class MergeSort {
    // Merges two subarrays of arr[].
    // First subarray is arr[l..m]
    // Second subarray is arr[m+1..r]
    merge(arr, l, m, r) {
        //Your code here
        let temp = []
        let i = l
        let j = m + 1

        while (i <= m && j <= r) {
            if (arr[i] <= arr[j]) {
                temp.push(arr[i])
                i++
            } else {
                temp.push(arr[j])
                j++
            }
        }

        while (i <= m) {
            temp.push(arr[i])
            i++
        }

        while (j <= r) {
            temp.push(arr[j])
            j++
        }

        for (let k = 0; k < temp.length; k++) {
            arr[l + k] = temp[k]
        }
    }

    // Main function that sorts arr[l..r] using
    // merge()
    sort(arr, l, r) {
        //Write your code here
        if (l >= r) return
        const mid = Math.floor((l + r) / 2)
        //Call mergeSort from here
        this.sort(arr, l, mid)
        this.sort(arr, mid + 1, r)

        return this.merge(arr, l, mid, r)
    }

    /* A utility function to print array of size n */
    printArray(arr) {
        let n = arr.length;
        for (let i = 0; i < n; ++i)
            console.log(arr[i] + " ");
        console.log();
    }
}
// Driver method
let arr = [12, 11, 13, 5, 6, 7];
console.log("Given Array");
let ob = new MergeSort();
ob.printArray(arr);
ob.sort(arr, 0, arr.length - 1);
console.log("\nSorted array");
ob.printArray(arr);