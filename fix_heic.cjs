const fs = require('fs');
let content = fs.readFileSync('src/components/sections/ServicesSection.tsx', 'utf8');

content = content.replace(
  `src={service.bgImg}`,
  `src={service.bgImg}
                  onError={(e) => {
                    if (service.bgImg.includes('.HEIC')) {
                      (e.target).src = 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1600&auto=format&fit=crop';
                    }
                  }}`
);

fs.writeFileSync('src/components/sections/ServicesSection.tsx', content);
