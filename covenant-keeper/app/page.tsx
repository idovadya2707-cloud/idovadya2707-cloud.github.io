'use client';

import { useState, useEffect } from 'react';
import { AFFIRMATIONS, IMAGES } from '@/lib/constants';
import { getCurrentDayCount, getRandomIndex } from '@/lib/utils';

export default function CovenantKeeper() {
  const [dayCount, setDayCount] = useState<number>(0);
  const [affirmationIndex, setAffirmationIndex] = useState<number>(0);
  const [imageIndex, setImageIndex] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const [checkedInToday, setCheckedInToday] = useState(false);

  useEffect(() => {
    // Register service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {
        // Service worker registration failed, app will still work
      });
    }

    // Initialize on mount - calculate from start date
    const initialDayCount = getCurrentDayCount();
    setDayCount(initialDayCount);
    setAffirmationIndex(getRandomIndex(AFFIRMATIONS.length));
    setImageIndex(getRandomIndex(IMAGES.length));

    // Check if checked in today
    const today = new Date().toISOString().split('T')[0];
    const lastCheckDate = localStorage.getItem('lastCheckDate');
    setCheckedInToday(lastCheckDate === today);
  }, []);

  const handleCheckIn = () => {
    setIsAnimating(true);

    // Create particles
    const newParticles = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100 - 50,
      y: Math.random() * 100 - 50,
    }));
    setParticles(newParticles);

    // Log the check-in
    const today = new Date().toISOString().split('T')[0];
    localStorage.setItem('lastCheckDate', today);
    setCheckedInToday(true);

    // Rotate content
    setAffirmationIndex(getRandomIndex(AFFIRMATIONS.length));
    setImageIndex(getRandomIndex(IMAGES.length));

    setTimeout(() => {
      setIsAnimating(false);
      setParticles([]);
    }, 1000);
  };

  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-start p-4 pt-4 safe-area-inset">
      <div className="w-full max-w-sm">
        {/* Image Card - TOP */}
        <div className="relative mb-4 rounded-2xl overflow-hidden shadow-2xl h-64 bg-slate-800 border border-orange-500/20">
          <img
            src={IMAGES[imageIndex]}
            alt="Inspiration"
            className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>

        {/* Day Counter */}
        <div className="text-center mb-3">
          <div className="text-6xl font-black text-white mb-1">{dayCount}</div>
          <p className="text-gray-300 text-sm font-light tracking-wide">DAYS OF COMMITMENT</p>
          <div className="mt-2 inline-block px-3 py-1 rounded-full border border-orange-500/40 bg-orange-500/5">
            <p className="text-xs font-medium">{checkedInToday ? '✅ Checked in' : '❌ Not checked in'}</p>
          </div>
        </div>

        {/* Affirmation */}
        <div className="bg-gradient-to-r from-orange-500/10 to-pink-500/10 rounded-xl p-4 mb-4 backdrop-blur-sm border border-orange-500/20">
          <p className="text-white text-center text-sm leading-relaxed font-light italic">
            "{AFFIRMATIONS[affirmationIndex]}"
          </p>
        </div>

        {/* Main Button */}
        <div className="relative">
          <button
            onClick={handleCheckIn}
            disabled={isAnimating}
            style={{
              background: 'linear-gradient(135deg, #ff6b35, #f7931e)',
              color: '#ffffff',
              borderRadius: '1rem',
              padding: '0.9rem 1.5rem',
              fontSize: '1rem',
              fontWeight: '700',
              width: '100%',
              border: 'none',
              cursor: isAnimating ? 'not-allowed' : 'pointer',
              opacity: isAnimating ? 0.5 : 1,
              boxShadow: '0 20px 25px -5px rgba(255, 107, 53, 0.3)',
              transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
            }}
            onMouseEnter={(e) => {
              if (!isAnimating) {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 25px 35px -5px rgba(255, 107, 53, 0.4)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isAnimating) {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(255, 107, 53, 0.3)';
              }
            }}
          >
            I kept the covenant today
          </button>

          {/* Particles */}
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute pointer-events-none"
              style={{
                left: '50%',
                top: '50%',
                animation: `float-up 1s ease-out forwards`,
                '--tx': `${particle.x}px`,
                '--ty': `${particle.y}px`,
              } as React.CSSProperties & { '--tx': string; '--ty': string }}
            >
              <div className="text-3xl">💰</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float-up {
          0% {
            opacity: 1;
            transform: translate(var(--tx), var(--ty)) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(calc(var(--tx) * 2), calc(var(--ty) * 2 - 100px)) scale(0);
          }
        }
      `}</style>
    </div>
  );
}
