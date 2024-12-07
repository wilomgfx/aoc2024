import { expect, it, describe } from "vitest";
import { part1, part2 } from "./day";
import input from "./input";
describe("Day7", () => {
  describe("Part1", () => {
    it("should return the correct answer for the example provided", () => {
      const input = `
      190: 10 19
      3267: 81 40 27
      83: 17 5
      156: 15 6
      7290: 6 8 6 15
      161011: 16 10 13
      192: 17 8 14
      21037: 9 7 18 13
      292: 11 6 16 20
      `;
      const expected = 3749;
      expect(part1(input)).toBe(expected);
    });
    it("should return the correct answer for part 1", () => {
      expect(part1(input)).toBe(2941973819040);
    });
  });

  describe("Part2", () => {
    it("should return the correct answer for the example provided", () => {
      const input = `two1nine
      eightwothree
      abcone2threexyz
      xtwone3four
      4nineeightseven2
      zoneight234
      7pqrstsixteen
      `;
      const expected = 281;
      expect(part2(input)).toBe(expected);
    });
    it("should return the correct answer for part 2", () => {
      expect(part2(input)).toBe(54249);
    });
  });
});
