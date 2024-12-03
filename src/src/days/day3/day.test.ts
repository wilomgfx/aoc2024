import { expect, it, describe } from "vitest";
import { part1, part2 } from "./day";
import input from "./input";

describe("Day3", () => {
  describe("Part1", () => {
    it("should return the correct answer for the example provided", () => {
      const input = `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`;
      const expected = 161;
      expect(part1(input)).toBe(expected);
    });
    it("should return the correct answer for part 1", () => {
      expect(part1(input)).toBe(170807108);
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
