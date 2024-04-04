function findMedian(numbers) {
    numbers.sort((a, b) => a - b);

    const length = numbers.length;
    const middleIndex = Math.floor(length / 2);
    if (length % 2 === 0) {
        return (numbers[middleIndex - 1] + numbers[middleIndex]) / 2;
    } else {
        return numbers[middleIndex];
    }
}
const numbers1 = [4, 2, 7, 1, 9, 5];
const numbers2 = [4, 2, 7, 1, 9, 5, 8];

console.log("Median of numbers1:", findMedian(numbers1)); // Output: 4.5
console.log("Median of numbers2:", findMedian(numbers2)); // Output: 5
