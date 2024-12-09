const EMPTY_CELL = ".";

type Coords = { x: number; y: number };

const inRange = (value: number, start: number, end: number): boolean => {
  if (start > end) {
    [start, end] = [end, start];
  }
  return start <= value && value < end;
};

const getMap = (grid: string[][]): Record<string, Coords[]> => {
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

const getAntinodes = (coords: Coords[], grid: string[][]): Coords[] => {
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
    .filter(Boolean)
    .map((line) => line.split(""));
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

const calculateLineEquation =
  (x1: number, y1: number, x2: number, y2: number) => (x: number, y: number) =>
    (y1 - y2) * x + (x2 - x1) * y + (x1 * y2 - x2 * y1);

const processAntinodeLines = (
  coords: Coords[],
  grid: string[][],
  antinodeGrid: boolean[][]
): boolean[][] => {
  const newAntinodeMap = antinodeGrid.map((row) => [...row]);

  // Iterate through each pair of coordinates
  for (let i = 0; i < coords.length; i++) {
    for (let j = 0; j < coords.length; j++) {
      if (i === j) continue;

      const { x: x1, y: y1 } = coords[i];
      const { x: x2, y: y2 } = coords[j];

      const lineEquation = calculateLineEquation(x1, y1, x2, y2);

      // Check each cell in the grid to see if it lies on the line
      for (let x = 0; x < grid.length; x++) {
        for (let y = 0; y < grid[0].length; y++) {
          if (newAntinodeMap[x][y]) continue;

          const lineResult = lineEquation(x, y);
          if (lineResult === 0) {
            newAntinodeMap[x][y] = true;
          }
        }
      }
    }
  }

  return newAntinodeMap;
};

const part2 = (input: string): number => {
  const inputs = input
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => line.split(""));

  const antinodeMap = inputs.map((line) => line.map(() => false));
  const antennaMap = getMap(inputs);

  let updatedAntinodeMap = antinodeMap;

  for (const coords of Object.values(antennaMap)) {
    updatedAntinodeMap = processAntinodeLines(
      coords,
      inputs,
      updatedAntinodeMap
    );
  }

  const uniqueAntinodes = updatedAntinodeMap.reduce(
    (acc, row) => acc + row.filter(Boolean).length,
    0
  );
  const answer = uniqueAntinodes;
  return answer;
};

export { part1, part2 };
