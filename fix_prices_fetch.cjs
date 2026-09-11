const fs = require('fs');
let content = fs.readFileSync('src/components/sections/LivePricesLocationSections.tsx', 'utf8');

const replacement = `export function LivePricesSection() {
  const prices = [
    { metal: 'Gold', price: 4683.67 },
    { metal: 'Silver', price: 69.49 },
    { metal: 'Platinum', price: 1891.38 },
    { metal: 'Palladium', price: 1367.71 }
  ];`;

// find `export function LivePricesSection() { ... return (`
const startIdx = content.indexOf('export function LivePricesSection() {');
const endIdx = content.indexOf('return (', startIdx);

content = content.substring(0, startIdx) + replacement + '\n\n  ' + content.substring(endIdx);

fs.writeFileSync('src/components/sections/LivePricesLocationSections.tsx', content);
