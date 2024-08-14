import { createServer } from "http";
const PORT = process.env.PORT;

const users = [
  {
    id: 1,
    name: "muzammil",
  },
  {
    id: 2,
    name: "arshad",
  },
  {
    id: 3,
    name: "loki",
  },
];
//logger middleware
const loggerMiddleWare = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const jsonMiddleWare = (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
};

// Route Handler

const getUsersHandler = (req, res) => {
  res.write(JSON.stringify(users));
  res.end();
};

//ROute handler for post request  api/users

const createUserHandler = (req, res) => {
  let body = "";
  // listen for the data
  req.on("data", (chunk) => {
    body += chunk.toString();
  });
  req.on("end", () => {
    const newUser = JSON.parse(body);
    users.push(newUser);
    res.statusCode = 201;
    res.write(JSON.stringify(newUser));
    res.end();
  });
};

const getUserByIdHandler = (req, res) => {
  const id = req.url.split("/")[3];
  const user = users.find((user) => user.id === parseInt(id));
  if (user) {
    res.write(JSON.stringify(user));
  } else {
    res.statusCode = 404;
    res.write(
      JSON.stringify({
        messsage: "User Not Found",
      })
    );
  }
  res.end();
};

const notFoundHandler = (req, res) => {
  res.statusCode = 404;
  res.write(
    JSON.stringify({
      messsage: "Route Not Found",
    })
  );
  res.end();
};

const server = createServer((req, res) => {
  loggerMiddleWare(req, res, () => {
    jsonMiddleWare(req, res, () => {
      if (req.url === "/api/users" && req.method === "GET") {
        getUsersHandler(req, res);
      } else if (
        req.url.match(/\/api\/users\/([0-9]+)/) &&
        req.method === "GET"
      ) {
        getUserByIdHandler(req, res);
      } else if (req.url === "/api/users" && req.method === "POST") {
        createUserHandler(req, res);
      } else {
        notFoundHandler(req, res);
      }
    });
  });
});

server.listen(PORT, () => {
  console.log(`Server is Running on ${PORT}`);
});
