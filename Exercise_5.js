// Time Complexity : O(n log n)
// Space Complexity : O(log n)
// Did this code successfully run on Leetcode : Yes
// Any problem you faced while coding this : Yes
class IterativeQuickSort {

    swap(arr, i, j) {

        //Try swapping without extra variable
        return [arr[i], arr[j]] = [arr[j], arr[i]]
    }

    /* This function is same in both iterative and
         recursive*/
    partition(arr, l, h) {

        //Compare elements and swap.
        let pivot = arr[h]
        let i = l - 1

        for (let j = l; j < h; j++) {
            if (arr[j] <= pivot) {
                i++
                this.swap(arr, i, j)
            }
        }
        this.swap(arr, i + 1, h)
        return i + 1
    }

    // Sorts arr[l..h] using iterative QuickSort
    QuickSort(arr, l, h) {
        if (arr.length <= 1) return arr
        //Try using Stack Data Structure to remove recursion.
        let stack = []
        stack.push(l)
        stack.push(h)

        while (stack.length) {
            let right = stack.pop()
            let left = stack.pop()

            if (left < right) {
                let pivotIndex = this.partition(arr, left, right)

                if (pivotIndex - 1 > left) {
                    stack.push(left)
                    stack.push(pivotIndex - 1)
                }

                if (pivotIndex + 1 < right) {
                    stack.push(pivotIndex + 1)
                    stack.push(right)
                }
            }
        }
        return arr
    }

    // A utility function to print contents of arr
    printArr(arr, n) {
        let i;
        for (i = 0; i < n; ++i)
            console.log(arr[i] + " ");
    }
}

// Driver code to test above
let ob = new IterativeQuickSort();
let arr = [4, 3, 5, 2, 1, 3, 2, 3];
ob.QuickSort(arr, 0, arr.length - 1);
ob.printArr(arr, arr.length);