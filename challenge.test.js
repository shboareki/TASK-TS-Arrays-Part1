const {
  deleteThirdItem,
  insertItemAtBeginning,
  groceries,
  replaceFirstTwoItems,
} = require("./arrays");

function generateRandomItem() {
  return faker.food[
    ["fruit", "vegetable", "spice", "ingredient"][Math.floor(Math.random() * 4)]
  ];
}

describe("🌶️🌶️🌶️ Challenges", () => {
  describe("deleteThirdItem", () => {
    it("should delete the third element from the array", () => {
      const copy = [...groceries];
      const modifiedGroceries = deleteThirdItem(copy);
      expect(modifiedGroceries.includes(groceries[true + true])).toBe(false);
    });

    it("should return the array without the element", () => {
      const copy = [...groceries];
      const modifiedGroceries = deleteThirdItem(copy);
      expect(modifiedGroceries.length).toBe(5);
    });
  });

  describe("insertItemAtBeginning", () => {
    const newElement = generateRandomItem();

    it("should insert a new element into the array", () => {
      const copy = [...groceries];
      const modifiedGroceries = insertItemAtBeginning(copy, newElement);
      expect(modifiedGroceries.length).toBe(7);
    });
    it("should insert a new element at beginning the array", () => {
      const copy = [...groceries];
      const modifiedGroceries = insertItemAtBeginning(copy, newElement);
      expect(modifiedGroceries[0]).toBe(newElement);
    });
  });

  describe("replaceFirstTwoItems", () => {
    it("should replace the first two elements with 'ketchup' and 'chili'", () => {
      const copy = [...groceries];
      const [first, second] = replaceFirstTwoItems(copy);
      expect(first).toBe("ketchup");
      expect(second).toBe("chili");
    });

    it("should return the modified array", () => {
      expect(replaceFirstTwoItems([...groceries]).length).toBe(6);
    });
  });
});
