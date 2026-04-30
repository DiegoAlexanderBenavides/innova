const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'siteData.ts');
let content = fs.readFileSync(filePath, 'utf-8');

// Prepend base url definition
const baseDef = "const base = import.meta.env.BASE_URL.replace(/\\/$/, '');\n\n";

if (!content.includes('const base =')) {
    content = baseDef + content;
}

// Replace string paths starting with /assets/
content = content.replace(/"(\/assets\/[^"]+)"/g, '`${base}$1`');
// Some image values might be single quoted but looking at the file they are double quoted.

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Done!');
