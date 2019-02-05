const {readDirFiltered, readDirFilterPromise} = require("./dirFilterPromise");

const directory = process.argv[2];
const filter = process.argv[3];

// BAD EXAMPLE
// readDirFiltered(directory, filter, (err, files) => {
//   if (err) {
//     console.log("UUUPs" + err);
//   }
//   console.log(files.join("\n"));
// });


// GOOD EXAMPLE
readDirFilterPromise(directory, filter)
  .then(d => {
    console.log(d.join("\n"))
    return readDirFilterPromise(directory, "js")
  })
  .then(d => {
    console.log(d.join("\n"))
    return readDirFilterPromise(directory, "json")
  })
  .then(d => {
    console.log(d.join("\n"))
    return readDirFilterPromise(directory, "txt")
  })
  .catch(e => console.log("Upps", e))