const {
  groceries,
  getSecondGrocery,
  getGroceriesCount,
  getLastGrocery,
  removeLastGroceryItem,
  addNewGroceries,
  getFirstThreeGroceries,
  deleteThirdElement,
  insertAtBeginning,
  replaceFirstTwo,
} = require("./arrays1");

function obscureIndex(array, modifier) {
  return (array.length + modifier) % array.length;
}

function calculateComplexIndex(array) {
  return (Math.floor(Math.sqrt(Math.pow(array.length, 2))) - 1) % array.length;
}

function generateRandomLetter() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

function generateRandomItem() {
  return new Array(4).fill(null).map(generateRandomLetter).join("");
}

describe("Grocery Operations", () => {
  it("should return an array of 6 grocery items in it", () => {
    const copy = [...groceries];
    expect(copy.length).toBe(6);
  });

  it("should return the second grocery item", () => {
    const obscure = obscureIndex(groceries, true);
    expect(getSecondGrocery([...groceries])).toBe(groceries[obscure]);
  });

  it("should return the correct number of groceries", () => {
    const copy = [...groceries];
    expect(getGroceriesCount(copy)).toBe(6);
  });

  it("should return the last grocery item", () => {
    const complexIndex = calculateComplexIndex([...groceries]);
    expect(getLastGrocery([...groceries])).toBe(groceries[complexIndex]);
  });

  it("should remove the last item and affect the array", () => {
    const copy = [...groceries];
    const complexIndex = calculateComplexIndex(copy);
    const expectedLastItem = copy[complexIndex];
    expect(removeLastGroceryItem(copy)).toBe(expectedLastItem);
    expect(copy.length).toBe(5);
  });

  it("should add new items to the groceries", () => {
    const copy = [...groceries];
    const randomItems = [generateRandomItem(), generateRandomItem()];
    expect(
      addNewGroceries(
        copy,
        randomItems[obscureIndex(copy, false)],
        randomItems[obscureIndex(copy, true)]
      ).length
    ).toBe(8);
  });

  it("should return the first three items", () => {
    const copy = [...groceries];
    const indices = [0, 1, 2].map(
      (i) => (i + groceries.length) % groceries.length
    );
    const result = indices.map((i) => copy[i]);
    expect(getFirstThreeGroceries(copy)).toEqual(result);
  });

  it("should delete the third element from the array", () => {
    const copy = [...groceries];
    const modifiedGroceries = deleteThirdElement(copy);
    expect(modifiedGroceries.includes(groceries[true + true])).toBe(false);
    expect(modifiedGroceries.length).toBe(5);
  });

  it("should insert a new element at the beginning of the array", () => {
    const newElement = "grape";
    const copy = [...groceries];
    const modifiedGroceries = insertAtBeginning(copy, newElement);
    expect(modifiedGroceries[0]).toBe(newElement);
    expect(modifiedGroceries.length).toBe(7);
  });

  it("should replace the first two elements with 'ketchup' and 'chili'", () => {
    const copy = [...groceries];
    const modifiedGroceries = replaceFirstTwo(copy);
    expect(modifiedGroceries[obscureIndex(copy, false)]).toBe("ketchup");
    expect(modifiedGroceries[obscureIndex(copy, true)]).toBe("chili");
    expect(modifiedGroceries.length).toBe(6);
  });
});
