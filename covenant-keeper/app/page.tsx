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
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4 safe-area-inset">
      <div className="w-full max-w-sm">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Covenant Keeper</h1>
        </div>

        {/* Image Card */}
        <div className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl aspect-video bg-slate-700">
          <img
            src={IMAGES[imageIndex]}
            alt="Inspiration"
            className="w-full h-full object-cover transition-opacity duration-700"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Day Counter */}
        <div className="text-center mb-8">
          <div className="text-7xl font-bold text-white mb-2">{dayCount}</div>
          <p className="text-slate-300 text-lg">days of commitment</p>
          <p className="text-lg mt-3">{checkedInToday ? '✅ Checked in today' : '❌ Not checked in'}</p>
        </div>

        {/* Affirmation */}
        <div className="bg-slate-700/50 rounded-xl p-6 mb-8 backdrop-blur-sm border border-slate-600">
          <p className="text-white text-center text-lg leading-relaxed font-medium">
            "{AFFIRMATIONS[affirmationIndex]}"
          </p>
        </div>

        {/* Main Button */}
        <div className="relative">
          <button
            onClick={handleCheckIn}
            disabled={isAnimating}
            style={{
              backgroundColor: '#ffffff',
              color: '#000000',
              borderRadius: '0.75rem',
              padding: '1rem 1.5rem',
              fontSize: '1.25rem',
              fontWeight: 'bold',
              width: '100%',
              border: 'none',
              cursor: isAnimating ? 'not-allowed' : 'pointer',
              opacity: isAnimating ? 0.5 : 1,
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              transition: 'all 200ms',
            }}
            onMouseEnter={(e) => {
              if (!isAnimating) e.currentTarget.style.backgroundColor = '#f3f4f6';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff';
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
