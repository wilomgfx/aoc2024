const part1 = (input: string) => {
  const inputs = input
    .split("\n")
    .map((i) => i.trim())
    .filter((i) => i !== "");
  const grid = inputs;
  const rows = grid.length;
  const cols = grid[0].length;
  const target = "XMAS";
  const targetLength = target.length;
  let count = 0;

  const searchGrid = (x: number, y: number, dx: number, dy: number) => {
    for (let i = 0; i < targetLength; i++) {
      const nx = x + i * dx;
      const ny = y + i * dy;
      if (
        nx < 0 ||
        nx >= rows ||
        ny < 0 ||
        ny >= cols ||
        grid[nx][ny] !== target[i]
      ) {
        return false;
      }
    }
    return true;
  };

  for (let x = 0; x < rows; x++) {
    for (let y = 0; y < cols; y++) {
      if (searchGrid(x, y, 1, 0)) count++; // Horizontal right
      if (searchGrid(x, y, 0, 1)) count++; // Vertical down
      if (searchGrid(x, y, 1, 1)) count++; // Diagonal down-right
      if (searchGrid(x, y, 1, -1)) count++; // Diagonal down-left
      if (searchGrid(x, y, -1, 0)) count++; // Horizontal left
      if (searchGrid(x, y, 0, -1)) count++; // Vertical up
      if (searchGrid(x, y, -1, -1)) count++; // Diagonal up-left
      if (searchGrid(x, y, -1, 1)) count++; // Diagonal up-right
    }
  }
  const answer = count;
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
