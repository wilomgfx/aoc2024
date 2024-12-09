const EMPTY_CELL = ".";

type Coords = { x: number; y: number };

const inRange = (value: number, start: number, end: number): boolean => {
  if (start > end) {
    [start, end] = [end, start];
  }
  return start <= value && value < end;
};

const getMap = (grid: string[]): Record<string, Coords[]> => {
  const map: Record<string, Coords[]> = {};

  const addToMap = (cell: string, x: number, y: number) => {
    if (cell === EMPTY_CELL) return;
    if (!map[cell]) map[cell] = [];
    map[cell].push({ x, y });
  };

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      addToMap(grid[row][col], row, col);
    }
  }

  return map;
};

const getAntinodes = (coords: Coords[], grid: string[]): Coords[] => {
  const antinodes: Coords[] = [];

  for (let i = 0; i < coords.length; i++) {
    for (let j = 0; j < coords.length; j++) {
      if (i === j) continue;

      const x = 2 * coords[j].x - coords[i].x;
      const y = 2 * coords[j].y - coords[i].y;

      if (inRange(x, 0, grid.length) && inRange(y, 0, grid[0].length)) {
        antinodes.push({ x, y });
      }
    }
  }

  return antinodes;
};

const getUniqueAntinodes = (antinodes: Coords[]): Coords[] => {
  const uniqueSet = new Set(
    antinodes.map((antinode) => `${antinode.x}:${antinode.y}`)
  );

  return Array.from(uniqueSet).map((key) => {
    const [x, y] = key.split(":");
    return { x: Number(x), y: Number(y) };
  });
};

const part1 = (input: string) => {
  const inputs = input
    .split("\n")
    .map((i) => i.trim())
    .filter((i) => i !== "");

  const map = getMap(inputs);
  const allAntinodes = [];

  for (const coords of Object.values(map)) {
    const antinodes = getAntinodes(coords, inputs);
    allAntinodes.push(...antinodes);
  }

  const uniqueAntinodes = getUniqueAntinodes(allAntinodes);

  const answer = uniqueAntinodes.length;
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
