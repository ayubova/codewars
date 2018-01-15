const magicSum = numbers => (Array.isArray(numbers) ? numbers.reduce((acc, num) => (num % 2 && String(num).includes('3')? num + acc: acc), 0): 0);
