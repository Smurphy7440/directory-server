// All route functions will be stored here for execution ( To be used by the index.js file)
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

// Commands
//const ls = spawn("ls", ["-alh"]);
var parent = {};

exports.default = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    console.log(req.body);
    var final_directory = req.body.directory ? path.join(req.body.directory, "./") : path.join(__dirname,'../');
    console.log(final_directory);
    //console.log("---------------");
    //console.log(typeof path.join(__dirname, "../scripts/get_tree.js"));
    const tree_command = spawn('node', [path.join(__dirname, "../scripts/get_tree.js"), final_directory], {cwd: __dirname});
    tree_command.on("close", (code) => {
        console.log(`Process exited with code ${code}`);
        fs.readFile(path.join(__dirname, "../scripts/output.json"), "utf8", (err, jsonString) => {
            if (err) {
              console.log("Error reading file from disk:", err);
              return;
            }
            try {
                parent = JSON.parse(jsonString);
                //console.log(parent);
                res.json({parent})
            } catch (err) {
              console.log("Error parsing JSON string:", err);
            }
          });
    });
}
