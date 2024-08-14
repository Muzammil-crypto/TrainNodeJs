import { createServer } from "http";
const PORT = process.env.PORT;

const users = [
  {
    id: 1,
    name: 'muzammil',
  },
  {
    id: 2,
    name: 'arshad',
  },
  {
    id: 3,
    name: 'loki',
  },
];

const server = createServer((req, res) => {
  if (req.url === "/api/users" && req.method === "GET") {
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(users));
    res.end();
  }
    else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET'){
        const id = req.url.split('/')[3];
        console.log("id:", id);
        debugger;
        res.setHeader("Content-Type", "application/json");
        res.write(JSON.stringify({
            id: 3,
            name: 'Muzammil'
        }));
        res.end();
    
  }else{
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify({
        messsage: "Route Not Found"
    }));
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Server is Running on ${PORT}`);
});
