const productObj = [
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

// Expected:
// The value productObj with same location will merge

type MergedProduct = {
  location: string;
  items: typeof productObj;
};

export const mergeDuplicate = (obj: typeof productObj) => {
  const mergedProductObj: Array<MergedProduct> = [];
  const locationSet = new Set<string>();

  obj.forEach((product) => {
    if (!locationSet.has(product.location)) {
      locationSet.add(product.location);

      return mergedProductObj.push({
        location: product.location,
        items: [product],
      });
    }

    return mergedProductObj
      .find((p) => p.location === product.location)
      .items.push(product);
  });

  return mergedProductObj;
};
