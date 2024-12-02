const part1 = (input: string) => {
  const inputs = input
    .split("\n")
    .map((i) => i.trim())
    .filter((i) => i !== "");

  const isIncreasing = (arr: number[]) => {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        return false;
      }
    }
    return true;
  };

  const isDecreasing = (arr: number[]) => {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < arr[i + 1]) {
        return false;
      }
    }
    return true;
  };

  const decreasingIncreasing = (arr: number[]) => {
    return isDecreasing(arr) || isIncreasing(arr);
  };

  const decreasingIncreasingRows = inputs.map((row) => {
    const numbers = row.split(" ").map((n) => parseInt(n));
    return decreasingIncreasing(numbers);
  });

  const adjacentDiffersByRange = (arr: number[]) => {
    for (let i = 0; i < arr.length - 1; i++) {
      const diff = Math.abs(arr[i] - arr[i + 1]);
      if (diff < 1 || diff > 3) {
        return false;
      }
    }
    return true;
  };

  const adjacentDiffersByRangeRows = inputs.map((row) => {
    const numbers = row.split(" ").map((n) => parseInt(n));
    return adjacentDiffersByRange(numbers);
  });

  const rowsMatchingBothRules = decreasingIncreasingRows.map(
    (dir, i) => dir && adjacentDiffersByRangeRows[i]
  );
  const answer = rowsMatchingBothRules.filter((i) => i === true).length;
  return answer;
};

const part2 = (input: string) => {
  const inputs = input
    .split("\n")
    .map((i) => i.trim())
    .filter((i) => i !== "");

  const answer = "N/A";
  return answer;
};

export { part1, part2 };
