const fs = require('fs');

const mappings = {
  'ValuationNathanSections.tsx': [
    ['<span className="material-symbols-outlined text-[#D4AF37]">science</span>', '<FlaskConical className="text-[#D4AF37]" size={24} />', 'FlaskConical, Scale, LineChart, Play, ArrowRight'],
    ['<span className="material-symbols-outlined text-[#D4AF37]">scale</span>', '<Scale className="text-[#D4AF37]" size={24} />', null],
    ['<span className="material-symbols-outlined text-[#D4AF37]">analytics</span>', '<LineChart className="text-[#D4AF37]" size={24} />', null],
    ['<span className="material-symbols-outlined text-xl fill-1">play_arrow</span>', '<Play size={20} className="text-[#111] fill-current" />', null],
    ['<span className="material-symbols-outlined text-sm">east</span>', '<ArrowRight size={14} />', null]
  ],
  'RemainingSections.tsx': [
    ['<span className="material-symbols-outlined text-white">play_arrow</span>', '<Play className="text-white" size={24} />', 'Play']
  ],
  'ReviewsSection.tsx': [
    ['<span className="material-symbols-outlined">arrow_left_alt</span>', '<ArrowLeft size={24} />', 'ArrowLeft, ArrowRight, BadgeCheck'],
    ['<span className="material-symbols-outlined">arrow_right_alt</span>', '<ArrowRight size={24} />', null],
    ['<span className="material-symbols-outlined text-[14px]">verified</span>', '<BadgeCheck size={14} className="text-[#4285F4]" />', null],
    ['<span className="material-symbols-outlined text-sm">arrow_forward</span>', '<ArrowRight size={14} />', null]
  ],
  'ServicesSection.tsx': [
    ['<span className="material-symbols-outlined text-[#D4AF37] text-sm">check</span>', '<Check className="text-[#D4AF37]" size={14} />', 'Check']
  ],
  'HeroSection.tsx': [
    ['<span className="material-symbols-outlined text-[#D4AF37] text-sm">diamond</span>', '<Gem className="text-[#D4AF37]" size={14} />', 'Gem']
  ],
  'GoogleReviewsSlider.tsx': [
    ['<span className="material-symbols-outlined">arrow_left_alt</span>', '<ArrowLeft size={24} />', 'ArrowLeft, ArrowRight, BadgeCheck'],
    ['<span className="material-symbols-outlined">arrow_right_alt</span>', '<ArrowRight size={24} />', null],
    ['<span className="material-symbols-outlined text-[14px]">verified</span>', '<BadgeCheck size={14} className="text-[#4285F4]" />', null]
  ],
  'layout/ServicePageLayout.tsx': [
    ['<span className="material-symbols-outlined text-[#D4AF37]">check_circle</span>', '<CheckCircle2 className="text-[#D4AF37]" size={24} />', 'CheckCircle2']
  ],
  '../pages/GenericServicePage.tsx': [
    ['<span className="material-symbols-outlined text-sm">call</span>', '<Phone className="text-current" size={14} />', 'Phone']
  ],
  '../pages/Contact.tsx': [
    ['<span className="material-symbols-outlined text-2xl">mail</span>', '<Mail className="text-current" size={24} />', 'Mail, Phone, Clock, CheckCircle2, Send, ExternalLink'],
    ['<span className="material-symbols-outlined text-2xl">call</span>', '<Phone className="text-current" size={24} />', null],
    ['<span className="material-symbols-outlined text-2xl">schedule</span>', '<Clock className="text-current" size={24} />', null],
    ['<span className="material-symbols-outlined text-4xl text-emerald-400 mb-3">check_circle</span>', '<CheckCircle2 className="text-emerald-400 mb-3" size={40} />', null],
    ['<span className="material-symbols-outlined text-base">send</span>', '<Send className="text-current" size={16} />', null],
    ['<span className="material-symbols-outlined text-sm">open_in_new</span>', '<ExternalLink className="text-current" size={14} />', null]
  ]
};

for (const [file, ops] of Object.entries(mappings)) {
  const filePath = `src/components/sections/${file}`;
  let path = filePath;
  if (file.startsWith('../')) {
    path = `src/${file.substring(3)}`;
  }
  
  if (fs.existsSync(path)) {
    let content = fs.readFileSync(path, 'utf8');
    let imported = false;
    for (const [find, replace, importStr] of ops) {
      if (importStr && !imported) {
        content = `import { ${importStr} } from 'lucide-react';\n` + content;
        imported = true;
      }
      content = content.replaceAll(find, replace);
    }
    fs.writeFileSync(path, content);
  }
}
