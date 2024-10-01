function fibonacci(n) {
    if (n == 1) return 0;
    if (n == 2) return 1;

    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(`The answer for the fibonnaci code is ${fibonacci(5)}`);

function merge(left, right) {
    let leftInd = 0, rightInd = 0;
    let result = [];

    while (leftInd < left.length && rightInd < right.length) {
        if (left[leftInd] < right[rightInd]) {
            result.push(left[leftInd]);
            leftInd++;
        } else {
            result.push(right[rightInd]);
            rightInd++;
        }

        result = result.concat(left.slice(leftInd));
        result = result.concat(right.slice(rightInd));

        return result;
    }
}

    function mergeSort(nums) {
        if (nums.length <= 1) return nums;
        let mid = Math.floor(nums.length / 2);
        let leftArray = nums.slice(0, mid);
        let rightArray = nums.slice(mid);

        leftArray = mergeSort(leftArray);
        rightArray = mergeSort(rightArray);

        return merge(leftArray, rightArray);
    }

console.log(`The output for merge sort is ${mergeSort([5, 2, 3, 4, 1])}`); // Output should be [1, 2, 3, 4, 5]