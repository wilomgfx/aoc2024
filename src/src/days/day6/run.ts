// import input from "./input";
const input = `
....#.....
.........#
..........
..#.......
.......#..
..........
.#..^.....
........#.
#.........
......#...
`;
import { part1, part2 } from "./day";

const part1Start = performance.now();
const part1Answer = part1(input);
const part1End = performance.now();
const part1ExecutionTime = part1End - part1Start;
//part2
const part2Start = performance.now();
const part2Answer = part2(input);
const part2End = performance.now();
const part2ExecutionTime = part2End - part2Start;
console.log("--- Day 6 part1 ---");
console.log(part1Answer);
console.log(part1ExecutionTime);
console.log("--- Day 6 part2 ---");
console.log(part2Answer);
console.log(part2ExecutionTime);
