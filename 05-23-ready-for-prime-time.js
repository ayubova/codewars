// We need prime numbers and we need them now!

// Write a method that takes a maximum bound and returns all primes starting with 0 up-to and including the maximum bound.


const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num !== 1;
};

const prime = (n) => {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (isPrime(i)) {
      result.push(i);
    }
  }
  return result;
};
