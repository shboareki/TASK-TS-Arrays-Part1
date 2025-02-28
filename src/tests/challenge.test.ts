import { faker } from "@faker-js/faker";

import {
  deleteThirdItem,
  insertItemAtBeginning,
  replaceFirstTwoItems,
} from "../challenge";

function generateRandomItem() {
  return [
    faker.food.fruit,
    faker.food.vegetable,
    faker.food.spice,
    faker.food.ingredient,
  ][Math.floor(Math.random() * 4)]();
}

const groceries = Array(6)
  .fill("")
  .map(() => generateRandomItem());

describe("🌶️🌶️🌶️ Challenges", () => {
  describe("deleteThirdItem", () => {
    it("should delete the third element from the array", () => {
      const copy = [...groceries];
      deleteThirdItem(copy);
      expect(copy.includes(groceries[+true + +true])).toBe(false);
    });

    it("should return the array without the element", () => {
      expect(deleteThirdItem([...groceries]).length).toBe(5);
    });
  });

  describe("insertItemAtBeginning", () => {
    const newElement = generateRandomItem();

    it("should insert a new element into the array", () => {
      const copy = [...groceries];
      insertItemAtBeginning(copy, newElement);
      expect(copy.length).toBe(7);
    });

    it("should insert a new element at beginning the array", () => {
      const copy = [...groceries];
      insertItemAtBeginning(copy, newElement);
      expect(copy[0]).toBe(newElement);
    });

    it("should return the modified array", () => {
      expect(insertItemAtBeginning([...groceries], newElement).length).toBe(7);
    });
  });

  describe("replaceFirstTwoItems", () => {
    it("should replace the first two elements with 'ketchup' and 'chili'", () => {
      const copy = [...groceries];
      replaceFirstTwoItems(copy);
      const [first, second] = copy;
      expect(first).toBe("ketchup");
      expect(second).toBe("chili");
    });

    it("should return the modified array", () => {
      expect(replaceFirstTwoItems([...groceries]).length).toBe(6);
    });
  });
});
