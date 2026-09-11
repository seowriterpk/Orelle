const fs = require('fs');
let content = fs.readFileSync('server.ts', 'utf8');
content = content.replace('app.listen(PORT,', 'app.listen(Number(PORT),');
fs.writeFileSync('server.ts', content);
