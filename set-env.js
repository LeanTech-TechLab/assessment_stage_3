"use strict";

const fs_1 = require("fs");
const data = require("./env.json");

// Configure Angular `environment.ts` file path
const targetPath = './src/environments/environment.ts';

// `environment.ts` file structure
const envConfigFile = "export const environment = {" +
  "\n PRODUCTION: " + data.PRODUCTION + "," +
  "\n URL: '" + data.URL + "'," +
  "\n API: '" + data.API + "'," +
  "\n OMDB_APIKEY: '" + data.OMDB_APIKEY + "'," +
  "\n};";

const dir = './src/environments';

if (!fs_1.existsSync(dir)) {
    fs_1.mkdirSync(dir);
}

fs_1.writeFile(targetPath, envConfigFile, function (err) {
    if (err) {
        throw console.error(err);
    }
    else {
        console.log("Angular environment.ts file generated correctly at " + targetPath + " \n");
    }
});
