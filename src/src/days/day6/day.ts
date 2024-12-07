const part1 = (input: string) => {
  const inputs = input
    .split("\n")
    .map((i) => i.trim())
    .filter((i) => i !== "");

  const obstruction = "#";
  const directions = ["^", ">", "v", "<"];
  const moves = {
    "^": [-1, 0],
    ">": [0, 1],
    v: [1, 0],
    "<": [0, -1],
  } as Record<string, [number, number]>;

  let currentDirection = "^";
  let position: [number, number] | null = null;

  // Find the initial position
  for (let i = 0; i < inputs.length; i++) {
    for (let j = 0; j < inputs[i].length; j++) {
      if (inputs[i][j] === "^") {
        position = [i, j];
        break;
      }
    }
    if (position) break;
  }

  if (!position) {
    throw new Error("Initial position not found");
  }

  const visited = new Set();
  visited.add(position.toString());

  while (true) {
    const [dx, dy] = moves[currentDirection];
    const [x, y] = position as [number, number];
    const newX = x + dx;
    const newY = y + dy;

    if (
      newX < 0 ||
      newX >= inputs.length ||
      newY < 0 ||
      newY >= inputs[0].length
    ) {
      break; // Exit the grid
    }

    if (inputs[newX][newY] === obstruction) {
      // Turn 90 degrees right
      const currentIndex = directions.indexOf(currentDirection);
      currentDirection = directions[(currentIndex + 1) % 4];
    } else {
      position = [newX, newY];
      visited.add(position.toString());
    }
  }

  return visited.size;
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
