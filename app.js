const { Server } = require("http"); // atau impor dari modul lain jika berbeda

const server = new Server({
  host: process.env.NODE_ENV !== "production" ? "localhost" : "dicoding.com",
});

// Pastikan server dimulai atau dioperasikan dengan benar
server.listen(3000, () => {
  console.log(
    `Server running at http://${
      process.env.NODE_ENV !== "production" ? "localhost" : "dicoding.com"
    }`
  );
});
