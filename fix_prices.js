const fs = require('fs');
let content = fs.readFileSync('src/components/sections/LivePricesLocationSections.tsx', 'utf8');

content = content.replace(
  `const [loading, setLoading] = useState(true);\n  const [error, setError] = useState(false);`,
  `const [prices, setPrices] = useState<any[]>([\n    { metal: 'Gold', price: 4683.67 },\n    { metal: 'Silver', price: 69.49 },\n    { metal: 'Platinum', price: 1891.38 },\n    { metal: 'Palladium', price: 1367.71 }\n  ]);`
);

content = content.replace(
  `const [prices, setPrices] = useState<any[]>([]);\n  const [prices, setPrices] = useState<any[]>(`,
  `const [prices, setPrices] = useState<any[]>(` // wait, careful, I'll just use regex
);
