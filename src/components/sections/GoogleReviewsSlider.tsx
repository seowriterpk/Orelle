import { ArrowLeft, ArrowRight, BadgeCheck } from 'lucide-react';
import { useRef } from 'react';

const reviews = [
  {
    id: 1,
    name: 'Hilario28',
    date: '1 month ago',
    text: 'Muy buen trato lo recomiendo',
    image: 'https://lh3.googleusercontent.com/a/ACg8ocJaKrYeRcQGYEOcLXDmVoEY-aS1hNdhZMfisDdTrn74O28HTA=w40-h40-c-rp-mo-br100',
  },
  {
    id: 2,
    name: 'faramarz delshad',
    date: '1 month ago',
    text: 'Nathan is very honest and reliable',
    image: 'https://lh3.googleusercontent.com/a/ACg8ocI4X0uTQ1LMiLMEN4y-HKtpIWzQt1UG6PMVVf79wdcaJRHrtOU=w40-h40-c-rp-mo-br100',
  },
  {
    id: 3,
    name: 'Mark Shlomo',
    date: '1 month ago',
    text: 'I had a lot of scrap gold & silver. I needed Zelle quick and was in and out in under 10 minutes. Nathan gave me the best deal',
    image: 'https://lh3.googleusercontent.com/a-/ALV-UjXjpEniJbzkGfftqsaPSoCv37X7QVk7jwNEps7v9n7x4l4tsQvJ=w40-h40-c-rp-mo-br100',
  },
  {
    id: 4,
    name: 'solly fouerteh',
    date: '1 month ago',
    text: 'Lots of the refiners in the diamond district are low balling on scrap silver. I went to Nathan & Mark, they paid me top dollar and gave me cash on the spot. I got a premium for what I had',
    image: 'https://lh3.googleusercontent.com/a/ACg8ocLPkOjmWODJfUxJlia0vYY1NXLsQ6K7s_ONeIwJg-o0BR_NqA=w40-h40-c-rp-mo-br100',
  },
  {
    id: 5,
    name: 'Kathy Ferran',
    date: '1 month ago',
    text: 'I can’t say enough about Orelle Gold. Nathan is just amazing. So knowledgeable, trusting and a true gentleman. His partner Michael is a great guy too. So helpful. I highly, highly  recommend Orelle Gold. *****',
    image: 'https://lh3.googleusercontent.com/a-/ALV-UjVz23_QUYo3b6Uf21TnhT9us25KI-uhC7tGLTqyxXxgY04xcMCd=w40-h40-c-rp-mo-br100',
  },
  {
    id: 6,
    name: 'Lakiesha Buckley',
    date: '1 month ago',
    text: 'Nate was the best personality was very charming he was everything Shop Shop',
    image: 'https://lh3.googleusercontent.com/a/ACg8ocIJ-8EDBqDe-5nva5Tb-tPPTLWCHAa-neB6z89cStOFWkXbbQ=w40-h40-c-rp-mo-br100',
  },
  {
    id: 7,
    name: 'Londa72 Designs',
    date: '1 month ago',
    text: 'The best silver dealer in New York!!',
    image: 'https://lh3.googleusercontent.com/a-/ALV-UjUAPJR0fPSQdGu4rN1eAlTf6_lWxzy9CmZ9nOW4zB27C5yQpo7M=w40-h40-c-rp-mo-br100',
  },
];

export function GoogleReviewsSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-[#050505] overflow-hidden border-t border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.4em] mb-4 font-bold block">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-serif text-white flex items-center gap-4">
              Real Customer Reviews
            </h2>
            <div className="flex items-center gap-2 mt-4 text-[#E5E5E5] text-sm">
              <span className="font-bold text-white text-lg">5.0</span>
              <div className="flex text-[#FABB05]">
                {[...Array(5)].map((_, i) => (
                   <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                ))}
              </div>
              <span className="text-[#999] ml-2">Based on Google Reviews</span>
            </div>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full border border-[#333] flex items-center justify-center text-[#E5E5E5] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
            >
              <ArrowLeft size={24} />
            </button>
            <button 
              onClick={scrollRight}
              className="w-12 h-12 rounded-full border border-[#333] flex items-center justify-center text-[#E5E5E5] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
            >
              <ArrowRight size={24} />
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="flex-none w-[300px] md:w-[380px] bg-[#111] border border-[#222] p-8 rounded-sm snap-start flex flex-col"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex gap-4 items-center">
                  <div className="relative">
                    <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
                    <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-[2px]">
                      <img src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" alt="Google" className="w-4 h-4" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm mb-1">{review.name}</h3>
                    <div className="text-[#77736A] text-[10px] uppercase tracking-widest">{review.date}</div>
                  </div>
                </div>
              </div>
              <div className="flex gap-1 text-[#FABB05] mb-4 items-center">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                ))}
                <div className="flex items-center gap-1 ml-3 text-[#4285F4]">
                   <BadgeCheck size={14} className="text-[#4285F4]" />
                   <span className="text-[10px] uppercase tracking-wider font-bold">Verified</span>
                </div>
              </div>
              <p className="text-[#CCC] text-sm leading-relaxed flex-grow">"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
