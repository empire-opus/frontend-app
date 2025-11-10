// parser.js
import { parse } from 'url';
import { URL } from 'url';
import { join } from 'path';

// Define the config object
const config = {
  // Custom configuration variables go here
  rootFolder: 'public',
  theme: 'light',
};

// Define the parser function
function parser(pluginName, file, context) {
  // Check if the file is a URL
  if (parse(file).protocol) {
    // Resolve the file URL to a path
    const filePath = new URL(file).pathname;
    // Return the parsed file path
    return { filePath };
  } else {
    // If the file is a relative path, join it with the root folder
    const filePath = join(config.rootFolder, file);
    // Return the parsed file path
    return { filePath };
  }
}

export default parser;