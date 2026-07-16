import { useState, useEffect, useRef } from 'react';
import PageHeader from '../components/PageHeader';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HORSES = [
  {
    name: 'Casper',
    breed: 'Dutch Warmblood',
    age: '8 years',
    level: '1.40m',
    image: 'https://images.unsplash.com/photo-1598974357801-cbca100e65d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    status: 'For Sale',
    sire: 'Cardento',
    dam: 'Quidam de Revel',
  },
  {
    name: 'Luna',
    breed: 'Hanoverian',
    age: '6 years',
    level: '1.30m',
    image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1742&q=80',
    status: 'For Sale',
    sire: 'Lordanos',
    dam: 'Sandro Hit',
  },
  {
    name: 'Melvin VD Bisschop',
    breed: 'Belgian Warmblood',
    age: '11 years',
    level: '1.60m',
    image: 'https://images.unsplash.com/photo-1543877087-ebf71fde2be1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    status: 'Sold',
    sire: 'Bentley VDL',
    dam: 'Heartbreaker',
  },
  {
    name: 'Dorado',
    breed: 'Selle Français',
    age: '7 years',
    level: '1.35m',
    image: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    status: 'For Sale',
    sire: 'Diamant de Semilly',
    dam: 'Calvados',
  },
  {
    name: 'Eclipse',
    breed: 'Irish Sport Horse',
    age: '9 years',
    level: '1.45m',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1738&q=80',
    status: 'Sold',
    sire: 'Cruising',
    dam: 'King of Diamonds',
  },
  {
    name: 'Valentina',
    breed: 'Oldenburg',
    age: '5 years',
    level: '1.25m',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    status: 'For Sale',
    sire: 'Vingino',
    dam: 'Donnerhall',
  },
];

type FilterType = 'All' | 'For Sale' | 'Sold';

export default function Horses() {
  const [filter, setFilter] = useState<FilterType>('All');
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredHorses = HORSES.filter((h) => filter === 'All' || h.status === filter);

  useEffect(() => {
    if (!gridRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.horse-card',
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
        }
      );
    }, gridRef);

    return () => ctx.revert();
  }, [filter]);

  return (
    <>
      <PageHeader
        title="Horses"
        subtitle="Bred & Sourced for Champions"
        image="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
      />
      <section className="py-24 bg-[#faf9f6] text-gray-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Filter Tabs */}
          <div className="flex justify-center mb-12 space-x-2">
            {(['All', 'For Sale', 'Sold'] as FilterType[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-6 py-3 text-xs uppercase tracking-widest border transition-all duration-300 rounded-sm ${
                  filter === tab
                    ? 'bg-equestrian-dark text-white border-equestrian-dark'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-equestrian-dark'
                }`}
              >
                {tab}
                <span className="ml-2 text-[10px] opacity-60">
                  ({tab === 'All' ? HORSES.length : HORSES.filter((h) => h.status === tab).length})
                </span>
              </button>
            ))}
          </div>

          {/* Horse Grid */}
          <div ref={gridRef} className="grid md:grid-cols-3 gap-8">
            {filteredHorses.map((horse) => (
              <div
                key={horse.name}
                className="horse-card group cursor-pointer bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 rounded-sm overflow-hidden"
              >
                <div className="relative h-72 overflow-hidden w-full">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent group-hover:from-black/10 transition-all duration-500 z-10" />
                  <img
                    src={horse.image}
                    alt={horse.name}
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div
                    className={`absolute top-4 left-4 z-20 px-3 py-1 text-[10px] uppercase tracking-widest text-white backdrop-blur-md rounded-full ${
                      horse.status === 'Sold' ? 'bg-red-900/70' : 'bg-green-900/70'
                    }`}
                  >
                    {horse.status}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif mb-2 group-hover:text-equestrian-accent transition-colors">
                    {horse.name}
                  </h3>
                  <p className="text-gray-500 text-xs uppercase tracking-widest mb-3">{horse.breed}</p>
                  <div className="flex flex-wrap gap-3 text-sm text-gray-600 mb-4">
                    <span className="bg-gray-50 px-3 py-1 rounded-full text-xs">{horse.age}</span>
                    <span className="bg-gray-50 px-3 py-1 rounded-full text-xs">{horse.level}</span>
                  </div>
                  <div className="pt-4 border-t border-gray-100 text-xs text-gray-400">
                    <p>
                      <span className="text-gray-500">Sire:</span> {horse.sire}
                    </p>
                    <p>
                      <span className="text-gray-500">Dam Sire:</span> {horse.dam}
                    </p>
                  </div>
                  <div className="mt-4">
                    <span className="inline-flex items-center text-xs uppercase tracking-widest text-gray-900 border-b border-gray-900 pb-1 group-hover:text-equestrian-accent group-hover:border-equestrian-accent transition-colors">
                      View Details
                      <svg
                        className="w-3 h-3 ml-2 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredHorses.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              <p className="text-lg font-serif">No horses found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
