const calc = require("./calc")

describe("Calculator", () => {
  describe("add", () => {
    it("adds two positive numbers", () => {
      
      expect(calc.add(1, 2)).toBe(3);
      expect(calc.add(5, 7)).toBe(12);
      expect(calc.add(0.1, 0.2)).toBeCloseTo(0.3);
    });

    it("adds a positive and a negative number", () => {
      
      expect(calc.add(1, -2)).toBe(-1);
      expect(calc.add(-5, 7)).toBe(2);
      expect(calc.add(-0.1, 0.2)).toBeCloseTo(0.1);
    });

    it("adds two negative numbers", () => {
      
      expect(calc.add(-1, -2)).toBe(-3);
      expect(calc.add(-5, -7)).toBe(-12);
      expect(calc.add(-0.1, -0.2)).toBeCloseTo(-0.3);
    });
  });

  describe("subtract", () => {
    it("subtracts a positive number from a positive number", () => {
      
      expect(calc.subtract(5, 2)).toBe(3);
      expect(calc.subtract(10, 7)).toBe(3);
      expect(calc.subtract(0.5, 0.1)).toBeCloseTo(0.4);
    });

    it("subtracts a negative number from a positive number", () => {
      
      expect(calc.subtract(5, -2)).toBe(7);
      expect(calc.subtract(10, -7)).toBe(17);
      expect(calc.subtract(0.5, -0.1)).toBeCloseTo(0.6);
    });

    it("subtracts a positive number from a negative number", () => {
      
      expect(calc.subtract(-5, 2)).toBe(-7);
      expect(calc.subtract(-10, 7)).toBe(-17);
      expect(calc.subtract(-0.5, 0.1)).toBeCloseTo(-0.6);
    });
  });

  describe("divide", () => {
    it("divides a positive number by a positive number", () => {
      
      expect(calc.divide(6, 2)).toBe(3);
      expect(calc.divide(10, 5)).toBe(2);
      expect(calc.divide(0.5, 0.1)).toBeCloseTo(5);
    });

    it("divides a negative number by a positive number", () => {
      
      expect(calc.divide(-6, 2)).toBe(-3);
      expect(calc.divide(-10, 5)).toBe(-2);
      expect(calc.divide(-0.5, 0.1)).toBeCloseTo(-5);
    });

    it("throws an error when dividing by zero", () => {
      
      expect(() => {
        calc.divide(6, 0);
        }).toThrow("Cannot divide by zero");
        });
        });
        
        describe("multiply", () => {
        it("multiplies two positive numbers", () => {
        
        expect(calc.multiply(2, 3)).toBe(6);
        expect(calc.multiply(4, 5)).toBe(20);
        expect(calc.multiply(0.1, 10)).toBeCloseTo(1);
        });

        it("multiplies a positive and a negative number", () => {
          
          expect(calc.multiply(2, -3)).toBe(-6);
          expect(calc.multiply(-4, 5)).toBe(-20);
          expect(calc.multiply(-0.1, 10)).toBeCloseTo(-1);
        });
        
        it("multiplies two negative numbers", () => {
          
          expect(calc.multiply(-2, -3)).toBe(6);
          expect(calc.multiply(-4, -5)).toBe(20);
          expect(calc.multiply(-0.1, -10)).toBeCloseTo(1);
        });
      });
    });