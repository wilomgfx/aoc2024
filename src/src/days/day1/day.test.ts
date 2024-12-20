import { expect, it, describe } from "vitest";
import { part1, part2 } from "./day";
import input from "./input";
describe("Day1", () => {
  describe("Part1", () => {
    it("should return the correct answer for the example provided", () => {
      const input = `
      3   4
      4   3
      2   5
      1   3
      3   9
      3   3
      `;
      const expected = 11;
      expect(part1(input)).toBe(expected);
    });
    it("should return the correct answer for part 1", () => {
      expect(part1(input)).toBe(2031679);
    });
  });

  describe("Part2", () => {
    it("should return the correct answer for the example provided", () => {
      const input = `
      3   4
      4   3
      2   5
      1   3
      3   9
      3   3
      `;
      const expected = 31;
      expect(part2(input)).toBe(expected);
    });
    it("should return the correct answer for part 2", () => {
      expect(part2(input)).toBe(19678534);
    });
  });
});
