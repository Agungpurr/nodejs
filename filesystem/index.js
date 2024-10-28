// TODO: tampilkan teks pada notes.txt pada console.
const fs = require("fs");
const { resolve } = require("path");

const fileReadCallback = (error, data) => {
  if (error) {
    console.error("Gagal membaca berkas");
    return;
  }
  console.log(data);
};

fs.readFile(resolve(__dirname, "notes.txt"), "UTF-8", fileReadCallback);
