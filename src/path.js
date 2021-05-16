const path = require("path");

const folderLocation = "src/path/location";
const fileLocation = "src/path/location/fileName.json";

// console.log({ path });
const basePath = path.basename(folderLocation);

// output: location
console.log({ basePath });

const fileNameFromPath = path.basename(fileLocation, ".json");

// output: fileName
console.log({ fileNameFromPath });

const dirName = path.dirname(folderLocation);
const dirNameForFileLoc = path.dirname(fileLocation);

// output: { dirName:'src/path', dirNameForFileLoc: 'src/path/location' }
console.log({ dirName, dirNameForFileLoc });

const fileExtension = path.extname(fileLocation);

// output: .json
console.log({ fileExtension });

// checking the absolute
console.log(path.isAbsolute(dirName));

// path.format()
const pathFormat = path.format({ dir: "root/src", base: "fileName.txt" });
console.log({ pathFormat });

// path.join()
const joinedPath = path.join("/", "users", "john", "notes.txt");
console.log({ joinedPath }); // '/users/john/notes.txt'

// path.normalize()
const normalizedPath = path.normalize("/users/joe/..//test.txt");
//'/users/test.txt'
console.log({ normalizedPath });

// path.parse()
const parsedPath = path.parse(fileLocation);
console.log({ parsedPath });

// path.resolve()
const resolvedPath = path.resolve("joe.txt");
console.log({ resolvedPath });
