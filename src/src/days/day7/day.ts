const part1 = (input: string) => {
  const inputs = input
    .split("\n")
    .map((i) => i.trim())
    .filter((i) => i !== "");

  const validEquations = [];
  for (const i of inputs) {
    const [sum, ...operators] = i.split(":");
    const allOperators = operators.flatMap((i) => i.trim().split(" "));
    const targetSum = parseInt(sum);

    const evaluate = (
      ops: string[],
      index: number,
      currentSum: number
    ): boolean => {
      if (index === ops.length) {
        return currentSum === targetSum;
      }

      const num = parseInt(ops[index]);
      return (
        evaluate(ops, index + 1, currentSum + num) ||
        evaluate(ops, index + 1, currentSum * num)
      );
    };

    if (evaluate(allOperators, 0, 0)) {
      validEquations.push(sum);
    }
  }

  const answer = validEquations.reduce((acc, curr) => {
    return acc + parseInt(curr);
  }, 0);
  return answer;
};

const part2 = (input: string) => {
  const inputs = input
    .split("\n")
    .map((i) => i.trim())
    .filter((i) => i !== "");

  const validEquations = [];
  for (const i of inputs) {
    const [sum, ...operators] = i.split(":");
    const allOperators = operators.flatMap((i) => i.trim().split(" "));
    const targetSum = parseInt(sum);

    const evaluate = (
      ops: string[],
      index: number,
      currentSum: number
    ): boolean => {
      if (index === ops.length) {
        return currentSum === targetSum;
      }

      const num = parseInt(ops[index]);
      return (
        evaluate(ops, index + 1, currentSum + num) ||
        evaluate(ops, index + 1, currentSum * num) ||
        evaluate(ops, index + 1, parseInt(`${currentSum}${num}`))
      );
    };

    if (evaluate(allOperators, 0, 0)) {
      validEquations.push(sum);
    }
  }

  const answer = validEquations.reduce((acc, curr) => {
    return acc + parseInt(curr);
  }, 0);
  return answer;
  return answer;
};

export { part1, part2 };
