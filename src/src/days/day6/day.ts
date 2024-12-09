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
  const answer = visited.size;
  return answer;
};

const simulateMovement = (
  inputs: string[],
  startPos: [number, number],
  startDir: string,
  obstruction: string
) => {
  const directions = ["^", ">", "v", "<"];
  const moves = {
    "^": [-1, 0],
    ">": [0, 1],
    v: [1, 0],
    "<": [0, -1],
  } as Record<string, [number, number]>;

  let currentDirection = startDir;
  let position = startPos;
  const visited = new Set();
  visited.add(position.toString());

  while (true) {
    const [dx, dy] = moves[currentDirection];
    const [x, y] = position;
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
      const posString = position.toString();
      if (visited.has(posString)) {
        console.log(`Loop detected at position: ${posString}`);
        return true;
      }
      visited.add(posString);
    }
  }

  return false;
};

const part2 = (input: string) => {
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
  let startPos: [number, number] | null = null;

  // Find the initial position
  for (let i = 0; i < inputs.length; i++) {
    for (let j = 0; j < inputs[i].length; j++) {
      if (inputs[i][j] === "^") {
        startPos = [i, j];
        break;
      }
    }
    if (startPos) break;
  }

  if (!startPos) {
    throw new Error("Initial position not found");
  }

  let loopCount = 0;

  for (let i = 0; i < inputs.length; i++) {
    for (let j = 0; j < inputs[i].length; j++) {
      if (inputs[i][j] === "." && !(i === startPos[0] && j === startPos[1])) {
        // Place an obstacle and check for loops
        const newInputs = inputs.map((row, rowIndex) =>
          rowIndex === i
            ? row.slice(0, j) + obstruction + row.slice(j + 1)
            : row
        );

        console.log(`Placing obstacle at (${i}, ${j})`);
        if (
          simulateMovement(newInputs, startPos, currentDirection, obstruction)
        ) {
          console.log(`Loop created by placing obstacle at (${i}, ${j})`);
          loopCount++;
        }
      }
    }
  }

  console.log(`Total loops detected: ${loopCount}`);

  const answer = loopCount;
  return answer;
};

export { part1, part2 };
