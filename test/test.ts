import { check } from "prettier";
import { checkout } from "../src/checkout";

console.log("Running");
describe("checkout kata", () => {
  it("should return 0 when no itewms are sent", () => {
    expect(checkout("")).toBe(0);
  });
  it("should return 50 when a A is sent", () => {
    expect(checkout("A")).toBe(50);
  });
  it("should return 30 when a B is sent", () => {
    expect(checkout("B")).toBe(30);
  });
  it("should return 20 when a C is sent", () => {
    expect(checkout("C")).toBe(20);
  });
  it("shoud return 15 when a D is sent", () => {
    expect(checkout("D")).toBe(15);
  });
  it("should return 30 when sending two D", () => {
    expect(checkout("DD")).toBe(30);
  });
  it("should return 115 when sending one of each", () => {
    expect(checkout("ABCD")).toBe(115);
  });
  it("should apply a discount when sending three As", () => {
    expect(checkout("AAA")).toBe(130);
  });
  it("should apply a discount when sending two Bs", () => {
    expect(checkout("BB")).toBe(45);
  });
  it("should apply multiple discounts when having 8 As", () => {
    expect(checkout("AAAAAAAA")).toBe(360);
  });
  it("should apply multiple discounts when having 3 Bs", () => {
    expect(checkout("BBB")).toBe(75);
  });
  it("should return 100 when sending two As", () => {
    expect(checkout("AA")).toBe(100);
  });
  it("should return 260 when sending AABCDADDCD", () => {
    expect(checkout("AABCDADDCD")).toBe(260);
  });
  it("should return 310 when sending AAABBBCCCDDD", () => {
    expect(checkout("AAABBBCCCDDD")).toBe(310);
  });
  it("should throw error when sending an expected item", () => {
    expect(() => checkout("E")).toThrow("Unexpected item received");
  });
});
