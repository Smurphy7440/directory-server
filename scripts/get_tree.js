/*
This script will be used to find the subdirectories and files of a given directory
*/

console.log("get_tree.js ran");
const FileSystem = require("fs");
const path = require("path");
const dirTree = require("directory-tree");

const your_path = process.argv[2] || "./";

const tree = dirTree(your_path, {attributes:['mode', 'birthtime', 'type', "size", "extension"], normalizePath:false});
console.log(tree);
FileSystem.writeFile(path.join(__dirname, './output.json'), JSON.stringify(tree), (err) => {
    if(err) throw err;
    console.log("File output file renewed");
})