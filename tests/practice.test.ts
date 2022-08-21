import { Circle } from "../src/practice";

describe("circle class", () => {
  test("radius property is set by the constructor", () => {
    const circle: Circle = new Circle(99);
    expect(circle.radius).toBe(99);
  });
  test("getArea returns the correct value", () => {
    const circle: Circle = new Circle(2);
    expect(circle.getArea()).toBeCloseTo(12.57);
  });
});
