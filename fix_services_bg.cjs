const fs = require('fs');
let content = fs.readFileSync('src/components/sections/ServicesSection.tsx', 'utf8');

content = content.replace(
  `<div 
                  className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-luminosity group-hover:scale-105 group-hover:opacity-30 transition-all duration-700" 
                  style={{ backgroundImage: \`url(\${service.bgImg})\` }} 
                />`,
  `<img 
                  src={service.bgImg}
                  alt={service.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity group-hover:scale-105 group-hover:opacity-30 transition-all duration-700" 
                />`
);

fs.writeFileSync('src/components/sections/ServicesSection.tsx', content);
