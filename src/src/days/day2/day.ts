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

const adjacentDiffersByRange = (arr: number[]) => {
  for (let i = 0; i < arr.length - 1; i++) {
    const diff = Math.abs(arr[i] - arr[i + 1]);
    if (diff < 1 || diff > 3) {
      return false;
    }
  }
  return true;
};

const part1 = (input: string) => {
  const inputs = input
    .split("\n")
    .map((i) => i.trim())
    .filter((i) => i !== "");

  const decreasingIncreasingRows = inputs.map((row) => {
    const numbers = row.split(" ").map((n) => parseInt(n));
    return decreasingIncreasing(numbers);
  });

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

  const decreasingIncreasingRows = inputs.map((row) => {
    const numbers = row.split(" ").map((n) => parseInt(n));
    return decreasingIncreasing(numbers);
  });

  const adjacentDiffersByRangeRows = inputs.map((row) => {
    const numbers = row.split(" ").map((n) => parseInt(n));
    return adjacentDiffersByRange(numbers);
  });

  const isSafeAfterRemovingOne = (arr: number[]) => {
    for (let i = 0; i < arr.length; i++) {
      const newArr = arr.slice(0, i).concat(arr.slice(i + 1));
      if (adjacentDiffersByRange(newArr) && decreasingIncreasing(newArr)) {
        return true;
      }
    }
    return false;
  };

  const rowsMatchingBothRules = decreasingIncreasingRows.map(
    (dir, i) => dir && adjacentDiffersByRangeRows[i]
  );
  const unsafeRows = rowsMatchingBothRules.map((isSafe, i) => {
    if (!isSafe) {
      const numbers = inputs[i].split(" ").map((n) => parseInt(n));
      if (isSafeAfterRemovingOne(numbers)) {
        //"unsafe but can be safe by removing one number"
        return "safe";
      }
      return "unsafe";
    }
    return "safe";
  });

  const answer = unsafeRows.filter((i) => i === "safe").length;
  return answer;
};

export { part1, part2 };
