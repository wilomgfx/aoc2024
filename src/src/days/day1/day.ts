const part1 = (input: string) => {
  const inputs = input
    .split("\n")
    .map((i) => i.trim())
    .filter((i) => i !== "");

  const leftSideNumbers = inputs.map((i) => i.split("   ")[0]);
  const rightSideNumbers = inputs.map((i) => i.split("   ")[1]);

  const leftOrderedBySmallest = leftSideNumbers
    .map(Number)
    .sort((a, b) => a - b);
  const rightOrderedBySmallest = rightSideNumbers
    .map(Number)
    .sort((a, b) => a - b);

  const distanceBetweenLeftAndRight = leftOrderedBySmallest.map((i, index) => {
    return Math.abs(rightOrderedBySmallest[index] - i);
  });

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

  const leftSideNumbers = inputs.map((i) => i.split("   ")[0]);
  const rightSideNumbers = inputs.map((i) => i.split("   ")[1]);

  const leftSideNumberOccurenceCountInRightSide = leftSideNumbers.map((i) => {
    return rightSideNumbers.filter((j) => j === i).length;
  });

  console.log(leftSideNumberOccurenceCountInRightSide);

  const similarityScore = leftSideNumbers.map((i, index) => {
    return Number(i) * leftSideNumberOccurenceCountInRightSide[index];
  });

  console.log(similarityScore);

  const answer = similarityScore.reduce((acc, curr) => {
    return acc + curr;
  });
  return answer;
};

export { part1, part2 };
