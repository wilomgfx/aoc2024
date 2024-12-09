import { expect, it, describe } from "vitest";
import { part1, part2 } from "./day";
import input from "./input";
describe("Day6", () => {
  describe("Part1", () => {
    it("should return the correct answer for the example provided", () => {
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
      const expected = 41;
      expect(part1(input)).toBe(expected);
    });
    it("should return the correct answer for part 1", () => {
      expect(part1(input)).toBe(5312);
    });
  });

  describe("Part2", () => {
    it.only("should return the correct answer for the example provided", () => {
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
      const expected = 6;
      expect(part2(input)).toBe(expected);
    });
    it("should return the correct answer for part 2", () => {
      expect(part2(input)).toBe(54249);
    });
  });
});
