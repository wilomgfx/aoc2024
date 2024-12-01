const part1 = (input: string) => {
  const inputs = input
    .split("\n")
    .map((i) => i.trim())
    .filter((i) => i !== "");
  console.log(inputs);

  const leftSideNumbers = inputs.map((i) => i.split("   ")[0]);
  const rightSideNumbers = inputs.map((i) => i.split("   ")[1]);

  console.log(leftSideNumbers);
  console.log(rightSideNumbers);

  const leftOrderedBySmallest = leftSideNumbers.map(Number).sort((a, b) => a - b);
  const rightOrderedBySmallest = rightSideNumbers.map(Number).sort((a, b) => a - b);

  console.log(leftOrderedBySmallest);
  console.log(rightOrderedBySmallest);

  const distanceBetweenLeftAndRight = leftOrderedBySmallest.map((i, index) => {
    return Math.abs(rightOrderedBySmallest[index] - i);
  });
  console.log(distanceBetweenLeftAndRight);

  const answer = distanceBetweenLeftAndRight.reduce((acc, curr) => {
    return acc + curr;
  });
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
