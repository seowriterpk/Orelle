const fs = require('fs');
let content = fs.readFileSync('src/pages/Contact.tsx', 'utf8');

const match = `useEffect(() => {
    // Fetch live metal spot prices for ticker bar
    fetch('/api/metal-prices')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setTickerPrices(data);
        }
      })
      .catch(() => {
        // Fallback static data if API offline
        setTickerPrices([
          { metal: 'XAU', price: 4683.67 },
          { metal: 'XAG', price: 69.49 },
          { metal: 'XPT', price: 1891.38 },
          { metal: 'XPD', price: 1367.71 }
        ]);
      });
  }, []);`;

content = content.replace(match, `useEffect(() => {
    setTickerPrices([
      { metal: 'XAU', price: 4683.67 },
      { metal: 'XAG', price: 69.49 },
      { metal: 'XPT', price: 1891.38 },
      { metal: 'XPD', price: 1367.71 }
    ]);
  }, []);`);

fs.writeFileSync('src/pages/Contact.tsx', content);
