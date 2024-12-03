const part1 = (input: string) => {
  const regex = /mul\(\d+,\d+\)/g;
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
  const regex = /mul\(\d+,\d+\)/g;
  const matches = input.match(regex) || [];

  let isEnabled = true;
  let lastIndex = 0;
  const validMatches = [];

  for (const match of matches) {
    const matchIndex = input.indexOf(match, lastIndex);
    const precedingInput = input.slice(lastIndex, matchIndex);

    if (precedingInput.includes("do()")) {
      isEnabled = true;
    } else if (precedingInput.includes("don't()")) {
      isEnabled = false;
    }

    if (isEnabled) {
      validMatches.push(match);
    }

    lastIndex = matchIndex + match.length;
  }

  if (validMatches.length > 0) {
    const parsedValues = validMatches.map((match) => {
      const [x, y] = match.slice(4, -1).split(",").map(Number);
      return x * y;
    });

    console.log(parsedValues);
    return parsedValues.reduce((acc, curr) => acc + curr, 0);
  }

  const answer = "N/A";
  return answer;
};

export { part1, part2 };
