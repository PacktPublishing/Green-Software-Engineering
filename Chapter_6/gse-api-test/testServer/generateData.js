const fs = require("fs");

const generateData = (size) => {
  const data = [];
  // Define a base image URL

  const baseUrl = "http://gse-api:3000/images/";

  for (let i = 1; i <= size; i++) {
    const imageName = `image${i}.jpg`; // Construct unique image name for each item

    data.push({
      id: i,

      name: `Item ${i}`,

      imageUrl: baseUrl + imageName, // Combine base URL with unique image name
    });
  }

  return data;
};

const size = process.argv[2] || 1000; // Default size is 1000

const jsonData = generateData(size);

fs.writeFileSync("data.json", JSON.stringify(jsonData, null, 2));

console.log(
  `Generated data.json with ${size} records, each linked to their unique image URL.`
);
