import { mergeDuplicate } from "../mergeDuplicate";

const sampleObj = [
  {
    id: 1,
    productName: "Camera X2Z Sonny",
    price: "2000000",
    tag: "Camera",
    location: "North Jakarta City",
  },
  {
    id: 2,
    productName: "Samsung Note 8+",
    price: "2800000",
    tag: "HP",
    location: "North Jakarta City",
  },
  {
    id: 3,
    productName: "Macbook Air M2",
    price: "20000000",
    tag: "Laptop",
    location: "Bogor City",
  },
];

const expectedObj = [
  {
    location: "North Jakarta City",
    items: [
      {
        id: 1,
        location: "North Jakarta City",
        productName: "Camera X2Z Sonny",
        price: "2000000",
        tag: "Camera",
      },
      {
        id: 2,
        location: "North Jakarta City",
        productName: "Samsung Note 8+",
        price: "2800000",
        tag: "HP",
      },
    ],
  },
  {
    location: "Bogor City",
    items: [
      {
        id: 3,
        location: "Bogor City",
        productName: "Macbook Air M2",
        price: "20000000",
        tag: "Laptop",
      },
    ],
  },
];

test("mergeDuplicates item", () => {
  expect(mergeDuplicate(sampleObj)).toEqual(expectedObj);
});
