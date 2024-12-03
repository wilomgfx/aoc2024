const regex = /mul\(\d+,\d+\)/g;

const part1 = (input: string) => {
  const inputs = input
    .split("\n")
    .map((i) => i.trim())
    .filter((i) => i !== "");
  const matches = input.match(regex);

  if (matches) {
    const parsedValues = matches.map((match) => {
      const [x, y] = match.slice(4, -1).split(",").map(Number);
      return x * y;
    });

    console.log(parsedValues);
    return parsedValues.reduce((acc, curr) => acc + curr, 0);
  }
  const answer = "N/A";
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
