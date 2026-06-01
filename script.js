const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let result = []
	let temp = []
	let sum = 0
	for (const num of arr) {
		if (sum + num <= n) {
			temp.push(num)
			sum += num
		}
		else {
			result.push(temp)
			temp = [num]
			sum = num
		}
	}
	if (temp.length) {
		result.push(temp)
	}
	return result
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
