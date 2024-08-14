// import fs from "fs";

// fs.readFile("./test.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// const data = fs.readFileSync("test.txt", "utf8");
// console.log(data);

// import fs from "fs/promises";

// fs.readFile("test.txt", "utf8")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));


import fs from "fs/promises";

const readFile = async () => {
  try {
    const data = await fs.readFile("test.txt", "utf8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const writeFile = async () => {
    try {
     await fs.writeFile("test.txt", "Hello I am writing to this file");
      console.log("written");
    } catch (error) {
      console.log(error);
    }
  };


writeFile();
readFile();